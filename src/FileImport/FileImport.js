import { useReducer } from 'react';
import { read, utils } from 'xlsx';
import Papa from 'papaparse';
import { useSelector } from 'react-redux';

let columnsConfig = undefined;

export const handleFileUpload = async (e, sampleHeaders, ColumnMaster) => {


  const file = e.target.files[0];
  try {
    const data = await readFile(file, sampleHeaders, ColumnMaster);
    return data;
  } catch (error) {
    console.error("Error in handleFileUpload:", error);
    return error;
  }
};


function isDate(value) {
  const dateStringRegex = /^[A-Za-z]{3} [A-Za-z]{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \([A-Za-z ]+\)$/;
  return dateStringRegex.test(value);
}

const readFile = (file, sampleHeaders, ColumnMaster) => {
  const fileExtension = file.name.split('.').pop().toLowerCase();

  if (fileExtension === 'csv') {
    return readCsvFile(file, sampleHeaders, ColumnMaster);
  } else if (fileExtension === 'xls' || fileExtension === 'xlsx') {
    return readExcelFile(file, sampleHeaders, ColumnMaster);
  } else {
    return Promise.reject(new Error('Unsupported file type'));
  }

};

const readExcelFile = (file, sampleHeaders, ColumnMaster) => {


  return new Promise((resolve, reject) => {

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, {
        type: 'array',
        cellDates: true,
        dateNF: 'dd/mm/yyyy'
      });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const headers = utils.sheet_to_json(sheet, { header: 1 }).find(row => row.some(cell => !!cell));
      const jsonData = utils.sheet_to_json(sheet, { header: headers , defval: '' });
      if(jsonData[0]){
        jsonData.splice(0, 1)
      }
      // jsonData.forEach(row => {
      //   for (const key in row) {
      //     if (isDate(row[key])) {
      //       const dateObject = new Date(row[key]);
      //       const formattedDate = dateObject.toLocaleDateString('en-US');
      //       row[key] = formattedDate;
      //     }
      //     // row[key] = (row[key]);
          
      //   }
      // });

      jsonData.forEach(row => {
        for (const key in row) {
          if (isDate(row[key])) {
            const dateObject = new Date(row[key]);
            const formattedDate = dateObject.toLocaleDateString('en-US');
            row[key] = formattedDate;
          }
          if (typeof row[key] === 'string' && row[key].includes('%')) {
            const percentValue = parseFloat(row[key].replace('%', ''));
            row[key] = parseFloat(percentValue.toFixed(2)); // Adjust to format as needed
          }
          else if (row[key] && typeof row[key] === 'string' && row[key].includes('�')) {
            const percentValue = parseFloat(row[key]?.replace('�', ''));
            row[key] = parseFloat(percentValue.toFixed(2)); // Adjust to format as needed
          }

          if (Object.hasOwnProperty.call(row, key)) {
            const matches = ColumnMaster?.find(item => item.EXTNAME.toString().toUpperCase() == key.toString().toUpperCase());
            if (matches && matches?.FILD_DATATYPE != null) {
              if(matches?.FILD_DATATYPE == 'Number'){
                if(row[key] == ''){
                  row[key] = 0;
                }else{
                  row[key] = parseFloat(row[key]);
                }
              }else if(matches?.FILD_DATATYPE == 'Text'){
                row[key] = String(row[key]);
              }
            }
            
          }
        }
      });

      let columns = jsonData.length > 0 ? Object.keys(jsonData[0]) : [];
      let dataType = {};

      for (const key in jsonData[0]) {

        if (Object.hasOwnProperty.call(jsonData[0], key)) {
          const valueType = typeof jsonData[0][key];

          const matches = ColumnMaster?.filter(item => item.EXTNAME.toString().toUpperCase() == key.toString().toUpperCase()); 
          if (matches?.length > 0 && matches[0]?.FILD_DATATYPE != null) {
            dataType[key] = matches[0].FILD_DATATYPE;
          }
          else {
            dataType[key] = valueType.toLowerCase() === "number" ? "Number" : "Text";
          }

        }
      }
      
      columnsConfig = columns?.map((col) => ({

        id: col.toString().toUpperCase(),
        ColName: col.toString().toUpperCase(),
        title: col,
        dataType: dataType[col],
        contentAlign: dataType[col] === "Number" ? "right" : "left",
        IsLock: false,
        DispFormat: dataType[col] === "Number" ? "########0.00" : null

      }));

      resolve({ data: jsonData, columnsConfig, type: 'xls' });
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
};

const readCsvFile = (file, sampleHeaders, ColumnMaster) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      Papa.parse(text, {
        header: true,
        complete: (results) => {
          let jsonData = results.data;
          jsonData.forEach(row => {
            for (const key in row) {
              if (isDate(row[key])) {
                const dateObject = new Date(row[key]);
                const formattedDate = dateObject.toLocaleDateString('en-US');
                row[key] = formattedDate;
              }
              // Check if the value contains '%' and convert it to a number
              if (typeof row[key] === 'string' && row[key].includes('%')) {
                const percentValue = parseFloat(row[key].replace('%', ''));
                row[key] = parseFloat(percentValue.toFixed(2)); // Adjust to format as needed
              }
              else if (row[key] && row[key].includes('�')) {
                const percentValue = parseFloat(row[key]?.replace('�', ''));
                row[key] = parseFloat(percentValue.toFixed(2)); // Adjust to format as needed
              }

              if (Object.hasOwnProperty.call(row, key)) {
                const matches = ColumnMaster?.find(item => item.EXTNAME.toString().toUpperCase() == key.toString().toUpperCase());
                if (matches && matches?.FILD_DATATYPE != null) {
                  if(matches?.FILD_DATATYPE == 'Number'){
                    if(row[key] == ''){
                      row[key] = 0;
                    }else{
                      row[key] = parseFloat(row[key]);
                    }
                  }else if(matches?.FILD_DATATYPE == 'Text'){
                    row[key] = String(row[key]);
                  }
                }
                
              }
            }
          });

          let columns = jsonData.length > 0 ? Object.keys(jsonData[0]) : [];
          let dataType = {};

          for (const key in jsonData[0]) {
            if (Object.hasOwnProperty.call(jsonData[0], key)) {
              const valueType = typeof jsonData[0][key];
              const matches = ColumnMaster?.filter(item => item.EXTNAME.toString().toUpperCase() == key.toString().toUpperCase());
              if (matches?.length > 0 && matches[0]?.FILD_DATATYPE != null) {
                dataType[key] = matches[0].FILD_DATATYPE;
              }
              else {
                dataType[key] = valueType.toLowerCase() === "number" ? "Number" : "Text";
              }
            }
          }
          columnsConfig = columns?.map((col) => ({
            id: col,
            ColName: col,
            title: col,
            dataType: dataType[col],
            contentAlign: dataType[col].toLowerCase() === "number" ? "right" : "left",
            IsLock: false,
            DispFormat: dataType[col].toLowerCase() === "number" ? "########0.00" : null
          }));
          resolve({ data: jsonData, columnsConfig, type: 'csv' });
        },
        error: (error) => {
          reject(error);
        }
      });
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

const compareWithSampleFile = (data, sampleHeaders) => {
  const uploadedHeaders = Object.keys(data[0]);
  const missingHeaders = sampleHeaders?.filter(header => !uploadedHeaders.includes(header));
  return missingHeaders.length > 0 ? missingHeaders.join(", ") : null;
};

function setDataType(key, value, NewValue) {
  for (let record of columnsConfig) {
    if (record[key] === value) {
      record[value] = NewValue;
    }
  }
}

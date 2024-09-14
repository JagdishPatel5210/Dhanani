import React, { useRef, useState, useEffect } from 'react';
import { handleFileUpload } from '../Slices/FileImport.js';
// import GlidGrid from '../../Components/Grid/GlidGrid';
import { GetColumnconfig } from '../Slices/httpMethod.js';
import { useSelector } from 'react-redux';
import { SearchText } from '../Slices/common.js';
import { IoClose } from 'react-icons/io5';
import { IoMdDoneAll } from 'react-icons/io';
import { Dialog } from 'primereact/dialog';
import { TiArrowRight } from "react-icons/ti";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import '../MainPage/common.css';
// import GlidGrid from '../MainPage/GlidGrid.jsx';

function FileImpComp({ show, handleClose, onDone, FileName }) {
    // const fileInputRef = useRef(null);
    // const [GetViewPara, setGetViewPara] = useState([])

    // const [exceldata, setexceldata] = useState([]);
    // const [missingColumnsData, setMissingColumnsData] = useState([]);
    // const [MissColTmpObj, setMissColTmpObj] = useState([]);

    // const [newDataObject, setNewDataObject] = useState([]);
    // const [visible, setVisible] = useState(show);

    // const regexPattern = /^\d+(\.\d+)?°$/;

    // useEffect(() => {
    //     setVisible(show);
    //     if (show == false) {
    //         setexceldata([])
    //         setMissColTmpObj([])
    //         setNewDataObject([])
    //         setMissingColumnsData([])
    //     }
    // }, [show])
    

    // useEffect(() => {
    //     Columnconfig();
    //     checkAndAddColumns();
    //     GetColumnObj();
    //     // ChekColData();
    // }, [exceldata]);

    // useEffect(() => {
    //     ChekColData()
    // }, [newDataObject])

    // useEffect(() => {
    //     ChekColData()
    // }, [MissColTmpObj])

    // const Columnconfig = async () => {
    //     let ColumnConfig = await GetColumnconfig("COLMISMATCH")
    //     setGetViewPara(ColumnConfig)
    // }

    // let ColMast = useSelector(state => state.ColMast.DynDisp);
    // let QuaMast = useSelector(state => state.ClarityMast.DynDisp);
    // let CutMast = useSelector(state => state.CutMast.DynDisp);
    // let FloMast = useSelector(state => state.FlorMast.DynDisp);
    // let ShpMast = useSelector(state => state.ShpMast.DynDisp)
    // let LabMast = useSelector(state => state.LabMast.DynDisp)
    // let GirdleMast = useSelector(state => state.GirdleMast.DynDisp)
    // let BGMMast = useSelector(state => state.BGMMast.DynDisp)
    // let EyeMast = useSelector(state => state.EyeCleanMast.DynDisp)
    // let GreenMast = useSelector(state => state.GreenMast.DynDisp)
    // let MilkyMast = useSelector(state => state.MilkyMast.DynDisp)
    // let NattsMast = useSelector(state => state.NattsMast.DynDisp)
    // let ServiceMast = useSelector(state => state.ServiceMast.DynDisp)
    // let ShadeMast = useSelector(state => state.ShadeMast.DynDisp)
    // let TermsMast = useSelector(state => state.TermMast.DynDisp)
    // let WhiteIncMast = useSelector(state => state.WhiteIncMast.DynDisp)
    // let BrwnMast = useSelector(state => state.BrownMast.DynDisp)
    // let CountryMast = useSelector(state => state.CountryMast.DynDisp)
    // let FloColMast = useSelector(state => state.FloColMast.DynDisp)
    // let CuletMast = useSelector(state => state.CuletSizeMast.DynDisp)
    // let CuletCondition = useSelector(state => state.CuletConMast.DynDisp)
    // let StkPartyMast = useSelector(state => state.StockPartyMast.DynDisp)
    // let HeartArrowMast = useSelector(state => state.HeartArrowMast.DynDisp)
    // let ColumnMaster = useSelector(state => state.ColumnMaster.DynDisp)
    // let FileFildValidation = useSelector(state => state.FileFildValidation.FILEFILDVALIDATION)
    // let LotMast = useSelector(state => state.LotMast.LotMast)
    // let LocationMast = useSelector(state => state.LocMast.LocMast)
    // let DropDown = useSelector(state => state.DropDown)

    // let objColCheck = FileFildValidation
    //     ?.filter(item => item.FILENAME === FileName)
    //     ?.map(item => item.HEADING_VALIDATION);

    // let objColDataCheck = FileFildValidation
    //     ?.filter(item => item.FILENAME === FileName)
    //     ?.map(item => item.FILD_VALIDATION);

    // let ObjDataArr = {

    //     'C_CODE': ColMast,
    //     'Q_CODE': QuaMast,
    //     'CT_CODE': CutMast,
    //     'PO_CODE': CutMast,
    //     'SY_CODE': CutMast,
    //     'FL_CODE': FloMast,
    //     'S_CODE': ShpMast,
    //     'GIRDLE_CODE': GirdleMast,
    //     'BGM_CODE': BGMMast,
    //     'EYE_CODE': EyeMast,
    //     'GREEN_CODE': GreenMast,
    //     'MILKY_CODE': MilkyMast,
    //     'NATTS_CODE': NattsMast,
    //     'SR_CODE': ServiceMast,
    //     'SH_CODE': ShadeMast,
    //     'TERM_CODE': TermsMast,
    //     'IN_CODE': WhiteIncMast,
    //     'BROWN_CODE': BrwnMast,
    //     'COU_CODE': CountryMast,
    //     'LOC_CODE': LocationMast,
    //     'FLOCOL': FloColMast,
    //     'CUSZ_CODE': CuletMast,
    //     'CUCON_CODE': CuletCondition,
    //     'STKP_CODE': StkPartyMast,
    //     'HRT_CODE': HeartArrowMast,
    //     'L_CODE': LotMast,


    // }

    // const [GetOrgKey, setGetOrgKey] = useState([]);
    // useEffect(() => {

    //     if(DropDown){
    //         const partyData = async () => {
    //             let GetDropDown = DropDown.ORGFILDKEY;
    //             setGetOrgKey(GetDropDown);
    //         };
    //         partyData();
    //     }

    // }, [DropDown]);

    // const isAnyMatchFound = (cname, extNames) => {
    //     const matches = ColumnMaster?.filter(item => item.CNAME.toString().toUpperCase() == cname.toString().toUpperCase() && extNames.toString().toUpperCase().includes(item.EXTNAME.toString().toUpperCase()));
    //     return matches?.length > 0;

    // };

    // const checkAndAddColumns = () => {
    //     if (!exceldata || !exceldata.data || !exceldata.columnsConfig) return;

    //     const columnsArr = objColCheck[0]?.split(',');
    //     const existingColumns = exceldata.columnsConfig?.map(col => col.id);
    //     const missingData = columnsArr?.filter(cname => !isAnyMatchFound(cname, existingColumns))
    //         ?.map(cname => ({
    //             field: cname,
    //             value: cname,
    //             Desc: `${cname} Not found`
    //         }));
    //     // setMissingColumnsData([...missingData]);
    //     setMissColTmpObj(missingData && [...missingData]);
    // };

    // const GetColumnObj = () => {
        
    //     const objColCheckArr = objColCheck[0]?.split(',');
    //     const objColDataArr = objColDataCheck[0]?.split(',');

    //     const mergedData = objColDataArr && objColCheckArr && [...new Set([...objColDataArr, ...objColCheckArr])];
    //     const columnsArr = mergedData;

    //     columnsArr?.forEach((x) => {
    //         ColumnMaster?.forEach((Column) => {
    //             if (Column.CNAME?.toUpperCase() == x?.toUpperCase()) {
    //                 const columnName = Column.EXTNAME;
    //                 const keyExists = exceldata?.data?.filter((Data) => {
    //                     const keys = Object.keys(Data);
    //                     const columnUpperCase = columnName.toString().toUpperCase();
    //                     const keyFound = keys.some((key) => key.toString().toUpperCase() == columnUpperCase);
    //                     return keyFound;
    //                 });

    //                 if (keyExists?.length > 0) {
    //                     setNewDataObject((prevData) => [
    //                         ...prevData,
    //                         { [Column.CNAME]: columnName },
    //                     ]);
    //                 }
    //             }
    //         });
    //     });


    // }

    // const ChekColData = () => {


    //     const jsonString = missingColumnsData && JSON.stringify(missingColumnsData);
    //     let TmpObj = jsonString && JSON.parse(jsonString)

    //     if (TmpObj === undefined) {
    //         TmpObj = []
    //     }

    //     exceldata.data = exceldata?.data?.map(item => {
    //         const uppercaseItem = {};
    //         Object.keys(item).forEach(key => {
    //             uppercaseItem[key.toUpperCase()] = item[key];
    //         });
    //         return uppercaseItem;
    //     });
        
    //     newDataObject?.map((obj) => {
    //         exceldata?.data?.forEach((x) => {
                
    //             const uppercaseX = {};
    //             Object.keys(x).forEach((key) => {
    //                 uppercaseX[key.toUpperCase()] = x[key];
    //             });
                
    //             const key = Object.keys(obj)[0];
    //             let OrKey = key;
                
    //             GetOrgKey?.filter((FKey) => {
    //                 if (FKey.DataKey == key) {
    //                     OrKey = FKey.OrKey;
    //                 }
    //             })
                
    //             const data = ObjDataArr[OrKey]
                
    //             if (key == undefined || null) {
    //                 return
    //             }
                
    //             if (uppercaseX[obj[key].toString().toUpperCase()] == null || uppercaseX[obj[key].toString().toUpperCase()] == undefined) {
    //                 return
    //             }
                
    //             const valueObj = Array.isArray(data) && SearchText(data, 'OTNAME', uppercaseX[obj[key].toString().toUpperCase()], key == 'PO_CODE' ? 'CT_CODE' : key == 'SY_CODE' ? 'CT_CODE' : OrKey);
                

    //             const valueList = Array.isArray(valueObj) && (valueObj.length > 1 ? valueObj?.map(item => item.value)?.filter(value => value != null)
    //             .join(',') : valueObj?.map(item => item.value)[0]);

    //             x[key] = Array.isArray(data) ? valueList : (regexPattern.test(uppercaseX[obj[key].toString().toUpperCase()]) ? parseFloat(uppercaseX[obj[key].toString().toUpperCase()]) : uppercaseX[obj[key].toString().toUpperCase()]);
                
    //             // x[key] = Array.isArray(data) ? valueList : (() => {
    //             //     let value = uppercaseX[obj[key].toString().toUpperCase()];
    //             //     if (regexPattern.test(value)) {
    //                 //       value = parseFloat(value);
    //                 //     } else if (value.toString().includes('%')) {
    //                     //       value = parseFloat(value.replace('%', '')) * 100;
    //                     //     }
    //                     //     return value;
    //                     //   });
                        
    //             Array.isArray(valueObj) && valueObj?.map((x, i) => {
    //                 if (x.value == undefined) {
    //                     TmpObj = TmpObj && TmpObj?.filter(row => row.value !== x.key)
    //                     // TmpObj = [...TmpObj, {
    //                     //     field: obj[key],
    //                     //     value: x[obj[key]],
    //                     //     Desc: `${x[obj[key]]} Data Not found`
    //                     // }]
    //                     TmpObj = [...TmpObj, {
    //                         field: obj[key],
    //                         value: x.key,
    //                         Desc: `${x.key} Data Not found`
    //                     }]
                        
    //                 }
    //             })
    //         });
    //     });
        
    //     TmpObj && TmpObj.length > 0 && setMissingColumnsData([...TmpObj])

    // };

    // const fileImp = async (e) => {
    //     const file = e.target.files[0];
    //     let data = await handleFileUpload(e, "abc", ColumnMaster);
    //     data.data = data?.data?.map(item => {
    //         const uppercaseItem = {};
    //         Object.keys(item).forEach(key => {
    //             uppercaseItem[key.toUpperCase()] = item[key];
    //         });
    //         return uppercaseItem;
    //     });
    //     setexceldata(data);
    // };

    // const fileImpClear = () => {
    //     fileInputRef.current.value = '';
    //     setexceldata([]);
    //     setMissingColumnsData([]);
    //     setMissColTmpObj([]);
    // };

    // const handleDone = () => {
    //     onDone(exceldata == null || undefined ? [] : exceldata);
    //     handleClose();
    // };

    // const ViewparaheaderElement = (
    //     <div className="inline-flex align-items-center justify-content-center">
    //         <span className="viewparaHeading">Import File</span>
    //     </div>
    // );

    // const shouldRenderSplitter = missingColumnsData && missingColumnsData.length > 0;

    // const handleDragOver = (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     event.target.classList.add('drag-over');
    // };
    
    // const handleDragEnter = (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     event.target.classList.add('drag-over');
    // };
    
    // const handleDragLeave = (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     event.target.classList.remove('drag-over');
    // };
    
    // const handleDrop = (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     event.target.classList.remove('drag-over');
        
    //     const files = event.dataTransfer.files;
    //     if (files.length > 0) {
    //         fileImp({ target: { files } }); // Simulate file input change event
    //     }
    // };

    // return (

    //     <div className='FileCompDiv'>
    //         <Dialog visible={visible} modal={true} header={ViewparaheaderElement} style={{ width: '80vw', backgroundColor: "red" }} onHide={handleClose} position=''>
    //             <div onDragOver={handleDragOver}
    //                 onDragEnter={handleDragEnter}
    //                 onDragLeave={handleDragLeave}
    //                 onDrop={handleDrop}
    //             >
    //                 <div className='border-end'>
    //                     <div className="d-flex align-items-center">
    //                         <div>
    //                             <input
    //                                 type="file"
    //                                 id="file-upload"
    //                                 accept=".xlsx, .xls, .csv"
    //                                 onChange={fileImp}
    //                                 ref={fileInputRef}
    //                                 style={{ display: 'none' }}
    //                             />
    //                         </div>
    //                         <div className="file-upload-content d-flex align-items-center">
    //                             <div>
    //                                 <label htmlFor="file-upload" className="browse-button">
    //                                     Browse
    //                                 </label>
    //                             </div>
    //                             <div>
    //                                 <p className="drag-text m-0">Drag and drop file here</p>
    //                             </div>
    //                         </div> 
    //                     </div>
    //                     <hr />
    //                     {/* <div className='row'>
    //                         {shouldRenderSplitter && (
    //                             <Splitter>
    //                                 <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
    //                                     {exceldata && exceldata.data && exceldata.columnsConfig && (
    //                                         <GlidGrid
    //                                             data={exceldata.data}
    //                                             columns={exceldata.columnsConfig}
    //                                             height={"500px"}
    //                                             headerHeight={30}
    //                                         />
    //                                     )}
    //                                 </SplitterPanel>
    //                                 <SplitterPanel className="flex align-items-center justify-content-center" size={25}>
    //                                     <GlidGrid
    //                                         data={missingColumnsData}
    //                                         columns={GetViewPara}
    //                                         height={"500px"}
    //                                         headerHeight={30}
    //                                     />
    //                                 </SplitterPanel>
    //                             </Splitter>
    //                         )}
                            
    //                         {!shouldRenderSplitter && (
    //                             exceldata && exceldata.data && exceldata.columnsConfig && (
    //                                 <GlidGrid
    //                                     data={exceldata.data}
    //                                     columns={exceldata.columnsConfig}
    //                                     height={"500px"}
    //                                     headerHeight={30}
    //                                 />
    //                             )
    //                         )}

    //                     </div> */}
    //                 </div>
    //                 <div className='mt-3 d-flex justify-content-between'>
    //                     <div>

    //                         <button type="button" data-toggle="collapse" className="btn btn-sm btn-outline-primary F12 ml-md-2 me-2" aria-expanded="true" onClick={handleDone}>
    //                             <IoMdDoneAll size={17} /> Done
    //                         </button>
    //                         <button type="button" data-toggle="collapse" className="btn btn-sm btn-outline-primary F12 ml-md-2" aria-expanded="true" onClick={fileImpClear}>
    //                             <IoClose size={17} /> Clear
    //                         </button>
    //                     </div>
    //                     <div>
    //                         {
    //                             MissColTmpObj && MissColTmpObj.length > 0 &&
    //                             <>
    //                                 <span className='ColCheckSpan text-dark bg-transparent'>
    //                                     Columns Not Match &nbsp;
    //                                     <TiArrowRight size={20} />
    //                                 </span>
    //                                 {
    //                                     MissColTmpObj?.map((btn, i) => {
    //                                         return <span className='ColCheckSpan' key={i}>
    //                                             {btn.field}
    //                                         </span>
    //                                     })
    //                                 }
    //                             </>
    //                         }
    //                     </div>
    //                 </div>
    //             </div>
    //         </Dialog>

    //     </div>
    // );
}

export default FileImpComp;

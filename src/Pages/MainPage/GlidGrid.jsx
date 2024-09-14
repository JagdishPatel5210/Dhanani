import React, { createElement, useCallback, useEffect, useRef, useState } from 'react'
// import "@glideapps/glide-data-grid/dist/index.css";

import "@glideapps/glide-data-grid/dist/index.css";
import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";
import './GlidGrid.css'
// import { StarCell } from "@glideapps/glide-data-grid-cells";
import { allCells } from "@glideapps/glide-data-grid-cells";
import { useEventListener } from './util'
import { Dialog } from 'primereact/dialog';
import ColumnConfigComp from '../../Pages/Utility/ColumnConfigComp';
import { ExcelGenerate } from '../../Pages/Utility/ExcelExportComp';
import excelIcon from '../../Asset/Image/svg/excel.svg'
import settingicon from '../../Asset/Image/svg/settingIcon.svg'
import moment from 'moment';
import { IoGrid } from 'react-icons/io5';

function GlidGrid(props) {
    let { data, columns, GetselectedRow, height, getCellTheme, ActionButton, headerHeight, rowHeight, verticalBorder, hoverEffect, AddNewRecord, ViewparaName, ExcelGet, onCellDoubleClicked } = props;
    let [filterdata, setfilterdata] = useState(data[0])
    const [showSearch, setShowSearch] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("")
    const [newDataColumns, setnewDataColumns] = useState(columns)
    const [freezeColumns, setfreezeColumns] = useState(0)
    const [SummaryRowCount, setSummaryRowCount] = useState(0)
    const [FormulaColumn, setFormulaColumn] = useState([])
    const [numRows, setNumRows] = React.useState(0)
    const [visible, setVisible] = useState(false);
    let possibleTags = "";
    const [selectedColorData, setselectedColorData] = useState({})
    const [filterColors, setfilterColors] = useState([])

    // useEffect(() => {
    //     if (columns) {
    //         setnewDataColumns([...columns])
    //     }
    // }, [columns])

    const [hoverRow, setHoverRow] = React.useState(undefined)

    let [Modify_data, setModify_data] = useState({});

    possibleTags = [
        {
            tag: "Bug",
            color: "#ff4d4d35",
        },
        {
            tag: "Feature",
            color: "#35f8ff35",
        },
        {
            tag: "Enhancement",
            color: "#48ff5735",
        },
        {
            tag: "First Issue",
            color: "#436fff35",
        },
        {
            tag: "PR",
            color: "#e0ff3235",
        },
        {
            tag: "Assigned",
            color: "#ff1eec35",
        },
    ];

    useEffect(() => {
        const jsonString = data && JSON.stringify(data);
        filterdata = jsonString && JSON.parse(jsonString)
        setfilterdata(jsonString && JSON.parse(jsonString))
        FormulaRowAdd()
        Modify_data = {};
        setModify_data({})
    }, [data])


    useEffect(() => {
        if (data && data.length > 0) {
            let colData = columns.filter(column => {
                return column && Object.keys(data[0])?.some(key => key && key?.toString().toLowerCase() == column.id.toString().toLowerCase());
            });

            colData = colData?.map((x) => {
                if (x.IsColFilter) {
                    return {
                        ...x,
                        hasMenu: true,
                        menuIcon: "dots",
                        overlayIcon: "rowOwnerOverlay"
                    }
                } else {
                    return x
                }
            })

            if (colData) {
                setnewDataColumns([...colData])
            }
            setfreezeColumns(colData?.filter(item => item.Isfreeze).length)
            FormulaRowAdd()
        }
    }, [data, columns])

    const [showPopover, setShowPopover] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState({ x: 0, y: 0 });
    const popoverRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setShowPopover(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleHeaderMenuClick = (event, position) => {
        const { x, y } = position;
        if (newDataColumns[event]) {
            // let colName = newDataColumns[event]?.ColName.toUpperCase(); //JP
            let colName = newDataColumns[event]?.ColName;
            setSelectedColumn({ x, y: y + 30, colName });
            setShowPopover(true);
            let filtercolorData = Array.from(new Set([...data?.map(x => x[colName + '_COLOR'])])).filter(x => x)
            filtercolorData = filtercolorData.sort((a, b) => (a?.toLowerCase() == 'white') ? 1 : (b?.toLowerCase() == 'white') ? -1 : 0);
            setfilterColors(filtercolorData)
        }
    };

    const handleCellDoubleClick = ([col, row]) => {
        const rowData = data[row];
        if (onCellDoubleClicked) {
            onCellDoubleClicked(rowData);
        }
    };

    function FormulaRowAdd() {
        if (FormulaColumn.length === 0) {
            const FormulaColumn = columns && columns?.filter(obj => obj.Formula !== undefined && obj.Formula !== "");
            setFormulaColumn(FormulaColumn)
        }
        if (FormulaColumn.length > 0) {
            const totalRow = {};

            const Actualfilterdata = filterdata?.filter(row => row.RowID !== "Total");
            FormulaColumn.forEach(column => {
                const columnName = column.ColName;
                const Formula = column.Formula;

                const DataType = column.dataType;

                if (Formula && Formula.toLowerCase() === "total") {
                    totalRow[columnName] = "Total";
                }
                else if (Formula && Formula.toLowerCase() === "total") {
                    const sum = Actualfilterdata.reduce((total, row) => total + (row[columnName] || 0), 0);
                    if (column.dataType?.toLowerCase() === 'number') {
                        totalRow[columnName] = (sum).toFixed(0);
                    }
                    else {
                        totalRow[columnName] = sum.toString();
                    }
                } else if (Formula && Formula.toLowerCase() === "count") {
                    const count = Actualfilterdata.reduce((total, row) => row[columnName] ? total + 1 : total, 0);

                    if (column.dataType?.toLowerCase() === 'number') {
                        totalRow[columnName] = (count).toFixed(0);
                    }
                    else {
                        totalRow[columnName] = count.toString();
                    }
                } else if (Formula && Formula.toLowerCase() === "sum") {
                    let totalSum = 0;
                    Actualfilterdata.forEach((row) => totalSum = totalSum + row[columnName] ?? 0);
                    totalSum = Number(totalSum).toFixed(2)
                    if (column.dataType?.toLowerCase() === 'number') {
                        totalRow[columnName] = Number(totalSum).toFixed(2);
                    }
                    else {
                        totalRow[columnName] = totalSum.toString();
                    }
                } else if (Formula && Formula.toLowerCase() === "sumint") {
                    let totalSum = 0;
                    Actualfilterdata.forEach((row) => totalSum = totalSum + row[columnName] ?? 0);
                    totalSum = Number(totalSum).toFixed(0)
                    if (column.dataType?.toLowerCase() === 'number') {
                        totalRow[columnName] = Number(totalSum).toFixed(0);
                    }
                    else {
                        totalRow[columnName] = totalSum.toString();
                    }
                }
                else if (Formula && Formula.toLowerCase().includes("=") === true) {

                    let Formulaname = Formula.split("=")[0]
                    let Formulacondition = Formula.split("=")[1]
                    let formulaFields = Formulacondition.split(",")

                    if (Formulaname.toLowerCase() === "avg") {
                        const sum = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[0]] * row[formulaFields[1]] || 0), 0);
                        const field2 = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[1]] || 0), 0);

                        if (column.dataType?.toLowerCase() === 'number') {
                            totalRow[columnName] = (sum / field2).toFixed(2);
                        }
                        else {
                            // totalRow[columnName] = count.toString();
                        }
                    }
                    else if (Formulaname.toLowerCase() === "avgint") {
                        const sum = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[0]] * row[formulaFields[1]] || 0), 0);
                        const field2 = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[1]] || 0), 0);

                        if (column.dataType?.toLowerCase() === 'number') {
                            totalRow[columnName] = (sum / field2).toFixed(0);
                        }
                        else {
                            // totalRow[columnName] = count.toString();
                        }
                    }
                    else if (Formulaname.toLowerCase() === "dis") {
                        const ORATE_AMT = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[0]] * row[formulaFields[2]] || 0), 0);
                        const RATE_AMT = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[1]] * row[formulaFields[2]] || 0), 0);
                        const I_CARAT = Actualfilterdata.reduce((total, row) => total + (row[formulaFields[2]] || 0), 0);

                        if (column.dataType?.toLowerCase() === 'number') {
                            totalRow[columnName] = (((ORATE_AMT - RATE_AMT) / ORATE_AMT) * 100.0).toFixed(2);
                        }
                        else {
                            // totalRow[columnName] = count.toString();
                        }
                    }
                }
            });
            totalRow["RowID"] = "Total"
            setfilterdata([...Actualfilterdata, totalRow]);
            setSummaryRowCount(1)
        }
    }

    function formatNumber(numberString, format) {
        if (format === undefined || format === null) {
            return numberString
        }
        if (!numberString) {
            return '';
        }
        const number = parseFloat(numberString);
        if (isNaN(number)) {
            return '';
        }
        const decimalPlaces = format.split('.')[1] ? format.split('.')[1].length : 0;
        const formattedNumber = number.toLocaleString(undefined, {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces
        });
        return formattedNumber;
    }

    const onItemHovered = React.useCallback(args => {
        //
        const [_, row] = args.location
        setHoverRow(args.kind !== "cell" ? undefined : row)
    }, [])

    const getRowThemeOverride = React.useCallback(
        row => {
            if (row == hoverRow) return {
                bgCell: 'lightgray'
            }
            if (!(row % 2 === 0)) {
                if (row == hoverRow) return {
                    bgCell: 'lightgray'
                }
                return {
                    bgCell: "#e0f0ff88",
                }
            }
        },
        [hoverRow]
    )
    function findValueByKey(obj, key) {
        const lowerCaseKey = key.toLowerCase(); // Convert key to lowercase
        for (const objKey in obj) {
            if (objKey.toLowerCase() === lowerCaseKey) { // Convert object key to lowercase for comparison
                return obj[objKey];
            }
        }
        return undefined; // Key not found
    }
    const getContent = useCallback(
        (cell) => {
            try {

                const [col, row] = cell;
                const dataRow = filterdata[row];
                // const dataRow = data_Man[row]; 
                let d = ""
                let ColKey = ""
                if (newDataColumns.length === 0) {
                    d = ""
                }
                else {
                    d = dataRow && dataRow[newDataColumns[col].id?.toUpperCase()];  //JP

                    if (ViewparaName && ViewparaName.toLowerCase() == "columnconfig") //Jaydeep
                    {
                        d = dataRow && dataRow[newDataColumns[col].id];
                    }

                    ColKey = newDataColumns[col].ColName;
                    // d = dataRow[ColKey];
                    // d=findValueByKey(dataRow,ColKey)
                }
                if (d === undefined || d === null) {
                    d = ""
                }

                let { dataType, DispFormat, contentAlign, Backcolor, Forecolor, IsLock, DispFormate, ColName } = newDataColumns[col];

                if (dataType == null || dataType == undefined) {
                    dataType = "";
                }

                if (Backcolor == null || Backcolor == undefined) {
                    Backcolor = "";
                }
                if (Forecolor == null || Forecolor == undefined) {
                    Forecolor = "";
                }

                if (dataType === "bubble" && d === "") {
                    dataType = ""
                }
                if (dataRow && dataRow["RowID"]?.toLowerCase() === "total") {
                    Backcolor = ""
                    Forecolor = ""
                    IsLock = true
                    if ((dataType.toLowerCase() === "boolean" || dataType.toLowerCase() === "linkbutton") && d === "") {
                        dataType = ""
                        Backcolor = ""
                        Forecolor = ""
                        d = ""
                    }
                }

                let theme = getCellTheme && dataRow && getCellTheme(dataRow, ColKey);
                if (theme && getCellTheme && Backcolor !== "") {
                    theme.bgCell = Backcolor;
                }
                if (theme && getCellTheme && Forecolor !== "") {
                    theme.textDark = Forecolor;
                }

                // theme.baseFontStyle="900"
                if (dataType.toLowerCase() === "number") {
                    let displayValue = '';
                    if (DispFormate) {
                        if (DispFormate == '0.0') {
                            displayValue = Number(d).toFixed(1)
                        }
                        else if (DispFormate == '0.00') {
                            displayValue = Number(d).toFixed(2)
                        }
                        else if (DispFormate == '0.000') {
                            displayValue = Number(d).toFixed(3)
                        } else {
                            displayValue = formatNumber(d, DispFormat).toString()
                        }
                    }
                    else {
                        displayValue = formatNumber(d, DispFormat).toString()
                    }
                    return {
                        allowOverlay: !IsLock,
                        kind: GridCellKind.Number,
                        readonly: IsLock,
                        hasMenu: false,
                        data: d,
                        displayData: displayValue,
                        // displayData: d.toString(),
                        contentAlign: contentAlign,
                        themeOverride: theme,
                        hoverEffect: true,
                        // themeOverride: {
                        //     textDark: "black",      //text Color                                          
                        //     baseFontStyle: "600 13px"
                        //   }
                    };
                }

                else if (dataType.toLowerCase() === "text") {
                    return {
                        allowOverlay: !IsLock,
                        kind: GridCellKind.Text,
                        readonly: IsLock,
                        hasMenu: false,
                        data: d,
                        displayData: d.toString(),
                        contentAlign: contentAlign,
                        themeOverride: theme,
                        // hoverEffect: true
                    };
                }

                else if (dataType.toLowerCase() === "boolean") {
                    if (d === "" || d === undefined || d === null) {
                        d = false
                    }
                    return {
                        allowOverlay: !IsLock,
                        kind: GridCellKind.Boolean,
                        readonly: IsLock,
                        data: d,
                        displayData: d
                    };
                }

                else if (dataType.toLowerCase() === "url" && dataRow && dataRow["RowID"]?.toLowerCase() != "total") {
                    let icon = '';
                    if (ColName == 'PHOTOLINK' && dataRow["RowID"]?.toLowerCase() != "total" && dataRow["PHOTOLINK"] != "") {
                        icon = '📸';
                    } else if ((ColName == 'VIDEOLINK1' && dataRow["VIDEOLINK1"] != "") || ((ColName == 'VIDEOLINK2' && dataRow["VIDEOLINK2"] != ""))) {
                        icon = '▶️';
                    } else {
                        icon = '';
                    }
                    return {
                        kind: GridCellKind.Uri,
                        displayData: ColName.toUpperCase().includes('LINK') ? icon : d,
                        data: d,
                        hoverEffect: true,
                        allowOverlay: !IsLock,
                        readonly: IsLock,
                        onClickUri: a => {
                            if (ColName == 'CERTNO') {
                                window.open(dataRow.REPORTLINK, "_blank");
                                a.preventDefault();
                            } else {
                                window.open(d, "_blank");
                                a.preventDefault();
                            }
                        },
                    };
                }
                else if (dataType.toLowerCase() === "star1") {
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: false,
                        readonly: true,
                        copyData: "4 out of 5",
                        hasMenu: false,
                        data: {
                            kind: "star-cell",
                            label: "Test",
                            rating: 1,
                        },
                    };
                }
                else if (dataType.toLowerCase() === "drilldown") {
                    return {
                        kind: GridCellKind.Drilldown,
                        data: [
                            {
                                text: "Test",
                                img: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg",
                            },
                            { text: "No Image" },
                        ],
                        allowOverlay: false,
                        readonly: true
                    };
                }
                else if (dataType.toLowerCase() === "button" && ActionButton && ActionButton(dataRow, ColKey)) {
                    if (ColKey?.toLowerCase() === "edit" && d !== "edit") {
                        return {
                            kind: GridCellKind.Text,
                            allowOverlay: false,
                            readonly: true,
                            hasMenu: false,
                            displayData: d,
                            data: d,
                            // themeOverride: theme
                        };
                    }
                    else if (d.toLowerCase() === "hide" || dataRow["RowID"]?.toLowerCase() === "total") {
                        return {
                            kind: GridCellKind.Custom,
                            allowOverlay: false,
                            readonly: true,
                            hasMenu: false,
                            data: "",
                            // themeOverride: theme
                        };
                    }
                    else {
                        return {
                            kind: GridCellKind.Custom,
                            allowOverlay: false,
                            readonly: true,
                            hasMenu: false,
                            data: ActionButton(dataRow, ColKey),
                            themeOverride: {
                                baseFontStyle: "700 13px"
                            }
                        };
                    }
                }
                else if (dataType.toLowerCase() === "dropdown1") {
                    const v = dataRow["DISC"]
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        readonly: false,
                        hasMenu: false,
                        data: {
                            kind: "range-cell",
                            min: 0,
                            max: 150,
                            value: v,
                            step: 0.10,
                            // label: `${Math.round(v * 100)}%`,
                            label: `${v} %`,
                            measureLabel: "100%"
                        }
                    };
                }
                else if (dataType === "dropdown") { // Add this block for dropdown
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: !IsLock,
                        readonly: IsLock,
                        hasMenu: false,
                        data: {
                            kind: "dropdown-cell",
                            allowedValues: ["Option 1", "Option 2", "Option 3"], // Define your options here
                            value: d,
                        },
                        contentAlign: contentAlign,
                        themeOverride: {
                            bgCell: '#FFFF',
                            textDark: '#0000' || "",
                        },
                    };
                }
                else if (dataType.toLowerCase() === "date") {
                    let date = new Date(dataRow[ColKey])
                    if (date.getFullYear() > 2000) {
                        date = moment(date).format('DD/MM/YYYY')
                    } else {
                        date = ''
                    }
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        copyData: "4",
                        readonly: true,
                        data: {
                            kind: "date-picker-cell",
                            date: date ? new Date(dataRow[ColKey]) : new Date(),
                            displayDate: date,
                            format: "date"
                        }
                    };
                }
                else if (dataType.toLowerCase() === "demo11") {
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        copyData: "4",
                        readonly: false,
                        data: {
                            kind: "article-cell",
                            markdown: "## This is a test"
                        }
                    };
                }
                
                else if (dataType.toLowerCase() === "demo") {
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        copyData: "4",
                        readonly: false,

                        data: {
                            kind: "tags-cell",
                            possibleTags: possibleTags,
                            tags: ([
                                possibleTags[1].tag,
                            ])
                        }
                    };
                }



                else if (dataType.toLowerCase() === "demoDrop") {


                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        copyData: "4",
                        readonly: false,
                        data: {
                            kind: "dropdown-cell",
                            allowedValues: [
                                null,
                                "Good",
                                "Better",
                                {
                                    value: "best",
                                    label: "Best"
                                }
                            ],
                            value: "Good"
                        }
                    };
                }

                else if (dataType.toLowerCase() === "linkbutton") {
                    if (d === "" || ActionButton(dataRow, ColKey) === undefined) {
                        return {
                            kind: GridCellKind.Text,
                            allowOverlay: false,
                            readonly: true,
                            displayData: "",
                            data: "",
                            hasMenu: false
                        }
                    }
                    else {
                        return {
                            kind: GridCellKind.Custom,
                            allowOverlay: false,
                            readonly: true,
                            hasMenu: false,
                            data: ActionButton(dataRow, ColKey),
                        };
                    }
                }
                else if (dataType.toLowerCase() === "image") {

                    return {
                        kind: GridCellKind.Image,
                        data: [
                            "https://i.imgur.com/5J0BftG.jpg",
                            "https://i.imgur.com/5J0BftG.jpg",
                            "https://i.imgur.com/5J0BftG.jpg",
                            "https://i.imgur.com/5J0BftG.jpg",
                        ],
                        onClick: () => {
                            window.open("https://transform.tools/typescript-to-javascript", "_blank");
                        },
                        onClickUri: () => {
                            window.open("https://transform.tools/typescript-to-javascript", "_blank");
                        },
                        allowOverlay: false,
                        readonly: false,


                    };
                } else if (dataType.toLowerCase() === "bubble") {
                    return {
                        kind: GridCellKind.Bubble,
                        data: d.split(","),
                        allowOverlay: false,
                        readonly: false,
                        contentAlign: contentAlign

                    };
                } else if (dataType.toLowerCase() === "dropdown111") {
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        copyData: 4,
                        readonly: IsLock,
                        hasMenu: false,
                        data: {
                            kind: "dropdown-cell",
                            allowedValues: [
                                null,
                                "Good",
                                "Better",
                                {
                                    value: "best",
                                    label: "Best"
                                }
                            ],
                            value: "Good"
                        }
                    };
                } else if (dataType.toLowerCase() === "datepicker") {
                    return {
                        kind: GridCellKind.Custom,
                        allowOverlay: true,
                        copyData: "4",
                        readonly: IsLock,
                        hasMenu: false,
                        data: {
                            kind: "date-picker-cell",
                            date: new Date(),
                            displayDate: new Date().toISOString(),
                            format: "date"
                        }
                    };
                } else {
                    return {
                        kind: GridCellKind.Text,
                        allowOverlay: true,
                        readonly: false,
                        displayData: d,
                        data: d,
                        hasMenu: false,
                        contentAlign: contentAlign,
                        themeOverride: theme,
                        // hoverEffect: hoverEffect,
                        // allowWrapping: true,
                        hoverEffectTheme: {
                            bgColor: "red",
                            fullSize: true,
                        },
                    };
                }
            } catch (error) {
            }
        },
        [filterdata]
    );

    const onCellEdited = useCallback((cell, newValue) => {


        const jsonString = filterdata && JSON.stringify(filterdata);
        let Actualfilterdata = JSON.parse(jsonString)

        // let Actualfilterdata = filterdata.filter(row => row.RowID !== "Total");
        if (newValue.kind === GridCellKind.Custom) {
            return
        }
        const [col, row] = cell
        let colkey = newDataColumns[col].ColName;
        let modifyRow = { ...data[row], [colkey]: newValue.data, "EDIT": "edit" }

        if (JSON.stringify(data[row]) !== JSON.stringify(modifyRow)) {
            let modifyArr = { ...Modify_data, [row]: modifyRow };
            Modify_data = modifyArr;
            setModify_data(modifyArr);
        }
        else {
            delete Modify_data[row];
            // Modify_data = Modify_data;
            setModify_data(Modify_data);
        }
        Actualfilterdata[row][colkey] = newValue.data
        Actualfilterdata[row]["EDIT"] = "edit"
        GetselectedRow && GetselectedRow(Object.values(Modify_data), modifyRow)
        setfilterdata([...Actualfilterdata])

    }, [newDataColumns, data, Modify_data, filterdata])

    const onColumnResize = React.useCallback((column, newSize) => {
        //
        const index = newDataColumns && newDataColumns.findIndex(ci => ci.title === column.title)
        const newArray = [...newDataColumns]
        newArray.splice(index, 1, {
            ...newDataColumns[index],
            width: newSize
        })
        setnewDataColumns(newArray);
    }, [newDataColumns])


    const onColMoved = useCallback((startIndex, endIndex) => {
        let newCols = [...newDataColumns]
        let rowToMove = newCols[startIndex];

        // Remove the row from its current position
        newCols.splice(startIndex, 1);

        // Insert the row at the new position
        newCols.splice(endIndex, 0, rowToMove);
        setnewDataColumns([...newCols])
    }, [newDataColumns])

    // const cols = React.useMemo(() => {
    //   return colsMap.map(getGridColumn)
    // }, [colsMap])



    useEventListener(
        "keydown",
        React.useCallback(event => {
            if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
                setShowSearch(cv => !cv)
                event.stopPropagation()
                event.preventDefault()
            }
        }, []),
        window,
        false,
        true
    )
    const SearchFilterData = (value) => {
        value = value.toLowerCase();
        if (value !== "") {
            const newData = data && data.filter((person) => {
                const anyFieldMatches = Object.values(person).some((personValue) => {
                    if (typeof personValue === 'string') {
                        return personValue.toLowerCase().includes(value);
                    }
                    return false;
                });
                return anyFieldMatches;
            });

            setfilterdata(newData);
            setNumRows(newData.length)
        }
        else {
            setfilterdata(data);
            setNumRows(data.length)
        }
        FormulaRowAdd()
    };
    const searchResults = React.useMemo(() => {
        //
        SearchFilterData(searchValue)
    }, [searchValue.length])


    function sortData(colIndex) {

        const filterdata_tmp = filterdata?.filter(row => row.RowID?.toLowerCase() !== "total");
        const SummaryField = filterdata?.filter(row => row.RowID?.toLowerCase() === "total");

        let NewSort = undefined
        if (newDataColumns[colIndex].Sort === "ASC") {
            if (newDataColumns[colIndex].dataType?.toLowerCase() === "number") {
                NewSort = filterdata_tmp.sort((a, b) => a[newDataColumns[colIndex].ColName] - b[newDataColumns[colIndex].ColName]);
            }
            else {
                NewSort = filterdata_tmp.sort((a, b) => a[newDataColumns[colIndex].ColName]?.localeCompare(b[newDataColumns[colIndex].ColName]));
            }
            setnewDataColumns(prevColumns => {
                const updatedColumns = prevColumns.map((col, index) =>
                    index === colIndex
                        ? { ...col, Sort: "DESC" }
                        : col
                );
                return updatedColumns;
            });
        }
        else {
            if (newDataColumns[colIndex].dataType?.toLowerCase() === "number") {
                NewSort = filterdata_tmp.sort((a, b) => b[newDataColumns[colIndex].ColName] - a[newDataColumns[colIndex].ColName]);
            }
            else {
                NewSort = filterdata_tmp.sort((a, b) => b[newDataColumns[colIndex].ColName]?.localeCompare(a[newDataColumns[colIndex].ColName]));
            }
            setnewDataColumns(prevColumns => {
                const updatedColumns = prevColumns.map((col, index) =>
                    index === colIndex
                        ? { ...col, Sort: "ASC" }
                        : col
                );
                return updatedColumns;
            });
        }
        setfilterdata([...NewSort, ...SummaryField])
    }

    // const [numRows, setNumRows] = React.useState(50)
    const onRowAppended = React.useCallback(() => {
        let newData = {}

        newDataColumns.forEach(index => {
            if (index.IsUpdate === true) {
                if (index.dataType.toLowerCase() === "number") {
                    newData[index.id] = 0
                }
                else if (index.dataType.toLowerCase() === "boolean") {
                    newData[index.id] = false
                }
                else {
                    newData[index.id] = ""
                }
            }
        })

        // setData([...data, newData]) 
        setfilterdata([...filterdata, newData]);
        setModify_data([...filterdata, newData])

    }, [data, newDataColumns, filterdata])

    function ViewparaClick() {
        setVisible(true)
    }

    const ViewparaheaderElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
            <span className="viewparaHeading">Column Configuration</span>
        </div>
    );

    const ExcelGen = () => {
        ExcelGenerate(ExcelGet, data); // Call ExcelGen function with the data to export
    };

    const rightElement = (
        <>
            <div className="d-flex">
                <div>
                    {ViewparaName !== "" && ViewparaName !== undefined &&
                        <img src={settingicon} style={{ cursor: "pointer" }} onClick={() => ViewparaClick()} />
                    }

                </div>
                <div className='px-2'>
                    {ExcelGet !== "" && ExcelGet !== undefined &&
                        <img src={excelIcon} style={{ cursor: "pointer" }} onClick={() => ExcelGen()} />
                    }
                </div>
            </div>
        </>
    );


    const selectColor = (e, colName) => {
        if (!selectedColorData[colName]) {
            selectedColorData[colName] = [];
        }
        if (selectedColorData[colName]) {
            if (e.target.checked) {
                selectedColorData[colName] = [...selectedColorData[colName], e.target.value]
                // setselectedColorData({ ...selectedColorData , [colName] : [ ...selectedColorData[colName] , e.target.value]})
            } else {
                // setselectedColorData({ ...selectedColorData , [colName] : [ ...selectedColorData[colName]?.filter(x => x != e.target.value)]})
                selectedColorData[colName] = [...selectedColorData[colName]?.filter(x => x != e.target.value)]
                if (selectedColorData[colName].length == 0) {
                    delete selectedColorData[colName]
                }
            }
            setselectedColorData({ ...selectedColorData })
        }
    }

    const applyFilter = () => {
        if (Object.keys(selectedColorData).length > 0) {
            let filterCondtions = []
            for (let key in selectedColorData) {
                filterCondtions.push(`${JSON.stringify(selectedColorData[key])}.includes(x['${key}_COLOR'])`)
            }
            filterdata = JSON.parse(JSON.stringify([...data.filter(x => eval(filterCondtions.join(' && ')))]))
            setfilterdata(filterdata)
        } else {
            filterdata = JSON.parse(JSON.stringify(data))
            setfilterdata(filterdata)
        }
        setShowPopover(false)
        FormulaRowAdd()
    }
    // useEffect(() => {
    //   let portal =  document.querySelectorAll('#portal')

    //   if(portal.length > 1){
    //     portal[0].remove()
    //   }
    //   return () => {
    //     let portal =  document.querySelectorAll('#portal')
    //     portal.forEach(x => x.remove())
    //     document.getElementById('portalContainer').innerHTML = '<div id="portal" style="position: fixed; left: 0; top: 0; zIndex: 9999;" />'
    //   }
    // }, [])

    return (
        <>
            {
                ViewparaName !== "" && <Dialog visible={visible} className='customDialog' modal={true} header={ViewparaheaderElement} style={{ width: '75vw', backgroundColor: "red" }} onHide={() => setVisible(false)} position=''>
                    <div className='p-2'>
                        <ColumnConfigComp MenuCode={ViewparaName} />
                    </div>
                </Dialog>
            }

            {
                newDataColumns && newDataColumns.length > 0 && filterdata && <DataEditor
                    customRenderers={allCells}
                    headerHeight={headerHeight ? headerHeight : 30}
                    rowHeight={rowHeight ? rowHeight : 28}
                    onHeaderMenuClick={handleHeaderMenuClick}

                    onCellEdited={onCellEdited}
                    getCellContent={getContent}
                    onCellClicked={handleCellDoubleClick}
                    // data={data}

                    searchResults={searchResults}
                    searchValue={searchValue}
                    onSearchValueChange={setSearchValue}
                    // rows={searchValue.length === 0 ? 10_000 : searchValue.length}


                    columns={newDataColumns}
                    rows={filterdata.length}
                    // rows={numRows}
                    width={"100%"}
                    // rowMarkers={"checkbox"}
                    // rowHeight={25}
                    height={height}
                    onColumnResize={onColumnResize}
                    onColumnMoved={onColMoved}
                    smoothScrollY={true}
                    smoothScrollX={true}

                    // onItemHovered={onItemHovered}

                    // getRowThemeOverride={i => i % 2 === 0 ? undefined : {  //Odd Even row Color karva mate
                    //     bgCell: "#e0f0ff88"
                    //     //   borderColor: "#3f90e0",
                    // }}

                    // getRowThemeOverride={getRowThemeOverride}

                    showSearch={showSearch}


                    // onSearchValueChange={setSearchValue}
                    // onColumnResize={true}



                    onSearchClose={() => {
                        setShowSearch(false);
                        setSearchValue("");
                    }}
                    onHeaderClicked={sortData}

                    // cellActivationBehavior="single-click"
                    verticalBorder={verticalBorder} //VerticalBorder Hide Karva mate
                    freezeColumns={freezeColumns}
                    getCellsForSelection={true}
                    rightElement={rightElement}
                    rightElementProps={{
                        fill: false,
                        sticky: true
                    }}
                    freezeTrailingRows={AddNewRecord === true ? 1 + SummaryRowCount : SummaryRowCount}
                    onRowAppended={AddNewRecord === true ? onRowAppended : undefined}
                // trailingRowOptions={AddNewRecord && {
                //     hint: "New row...",
                //     sticky: true,
                //     tint: true
                // }}
                />
            }
            {/* <div id="portalContainer">
                <div id="portal" style={{ position: "fixed", left: "0", top: "0", zIndex: "9999" }} />
            </div> */}
            {
                showPopover && (
                    <div
                        ref={popoverRef}
                        className='table-header-menu-popover'
                        style={{ position: 'fixed', left: selectedColumn.x, top: selectedColumn.y, zIndex: 9999 }}
                    >
                        {
                            filterColors?.map((colorName, i) => {
                                return <div className='d-flex py-2' key={i}>
                                    <input type='checkbox' value={colorName} checked={selectedColorData[selectedColumn.colName]?.includes(colorName) == true} onChange={(e) => selectColor(e, selectedColumn.colName)} /><div className='ms-2' style={{ backgroundColor: colorName, height: '20px', width: '100%', border: colorName?.toLowerCase() == 'white' ? '1px solid gray' : '' }}> </div>
                                </div>
                            })
                        }
                        <button className='btn btn-sm btn-outline-primary ml-md-2 F12 float-end' onClick={() => applyFilter()}>Apply</button>
                    </div>
                )
            }
        </>
    )
}
export default GlidGrid



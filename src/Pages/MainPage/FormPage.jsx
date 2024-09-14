import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './Main.css'
import { useDispatch, useSelector } from 'react-redux';
import { addData as DynamicAdd, fetchDataNew as DynamicFetchNew } from '../Slices/DynamicSlice.js';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { MdFileDownload } from 'react-icons/md';
import { AiFillFileExcel } from "react-icons/ai";
import { FileDownloader } from '../Slices/common.js';
import FamilyFormImport from '../ImportExcelSympleFile/Family Form.xlsx';
import FileImpComp from './FileImpComp.jsx';
import { startLoader, stopLoader } from '../Slices/loaderSlice.js';

function FormPage() {

    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    // Form data માટે state
    const [formData, setFormData] = useState({
        MemberID: null, formData: null, BirthDate: null, SurName: null, MemberName: null, FatherName: null, GFatherName: null, RelationWithMainMember: null, Education: null, Mat_SurName: null, Mat_Name: null,
        Mat_FatherName: null, Mat_Village: null, BirthDate: null, BloodGrp: null, Foreign_Resident_Address: null, Gender: null, MaritalStatus: null, Business: null, Business_address: null,
        Mobile_1: null, Mobile_2: null, EmailID: null

    });

    const [tableData, setTableData] = useState([]);
    const [optionsBloodGrp, setoptionsBloodGrp] = useState([]);
    const [memberID, setMemberID] = useState(1);
    const DropDown = useSelector(state => state.DropDown)
    const [show, setShow] = useState(false)
    const [exceldata, setexceldata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let GetDropDownParty = DropDown?.BLOODGRP;
            setoptionsBloodGrp(GetDropDownParty);
        };
        fetchData();
    }, []);

    const bloodGroupOptions = [
        { Name: 'A+', Code: 'A+' },
        { Name: 'A-', Code: 'A-' },
        { Name: 'B+', Code: 'B+' },
        { Name: 'B-', Code: 'B-' },
        { Name: 'AB+', Code: 'AB+' },
        { Name: 'AB-', Code: 'AB-' },
        { Name: 'O+', Code: 'O+' },
        { Name: 'O-', Code: 'O-' }
    ];
    
    const genderOptions = [
        { label: 'પુરુષ', value: 'પુરુષ' },
        { label: 'સ્ત્રી', value: 'સ્ત્રી' }
    ];

    const maritalStatusOptions = [
        { label: 'પરણિત', value: 'પરણિત' },
        { label: 'અપરણિત', value: 'અપરણિત' }
    ];

    const handleDropdownChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.value });
    };

    useEffect(() => {
        DispData();
    }, [])

    const DispData = async () => {  
        dispatch(startLoader());

        let ObjJsonDet = {
            jsonObj1: [{ MEMBERID: 0 }],
            SPName: "API_MemberDetailDisp"
        }

        const fetchData = async () => {
            try {
                let DetDT = await DynamicFetchNew(ObjJsonDet);
                if (Array.isArray(DetDT)) {
                    console.log(DetDT);
                    setTableData(DetDT);
                } else {
                    console.error('Data is not in the expected array format:', DetDT);
                    setTableData([]);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                dispatch(stopLoader());
            }
        };

        fetchData();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const saveData = async (newObj) => {
        const SaveObj = Array.isArray(newObj) ? newObj : [newObj];

        const objJson = {
            jsonObj1: SaveObj,
            SPName: 'API_MemberDetailSave'
        };
        console.log("objjson", objJson);

        try {
            await dispatch(DynamicAdd(objJson));
            setTableData([...tableData, { ...newObj, memberID }]); // Add form data with MemberID to tableData
            reset(); // Reset form after submission
            setFormData({
                MemberID: memberID + 1, FormNumber: '', BirthDate: '', SurName: '', MemberName: '', FatherName: '', GFatherName: '', RelationWithMainMember: '',
                Education: '', Mat_SurName: '', Mat_Name: '', Mat_FatherName: '', Mat_Village: '', BloodGrp: '', Foreign_Resident_Address: '', Gender: '',
                MaritalStatus: '', Business: '', Business_address: '', Mobile_1: '', Mobile_2: '', EmailID: ''
            }); // Clear form data
            setMemberID(memberID + 1); // Increment MemberID for the next entry
        } catch (error) {
            console.error("Failed to save data!", error);
        }
    };

    const handleDownloadMFG = () => {
        FileDownloader(FamilyFormImport, "Family Form" + '.xls');
    };

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setexceldata()
        setShow(true);
    }
    
    const FileName = "FamilyFormImport";

    const handleDone = (data) => {
        if (data.data) {
            const modifiedData = data.data?.map(item => {
                if (item.PKTID) {
                    return {
                        ...item,
                        MFGID: item.PKTID,
                        PKTID: item.PKTID
                    };
                }
                return item;
            });

            // setexceldata(modifiedData);
            // setPktEntData(modifiedData);
            // setexceldata(data.data);
            //setColumConfig(data.columnsConfig);
        }
        else {
            setexceldata(data);
        }
    };

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body>
                        <div className='row'>
                            <div className='col-12 text-end'>
                                    <button type="submit" className='btn btn-primary'>Import FIle</button>
                                    <button type="submit" className='btn btn-primary ms-3' onClick={handleDownloadMFG}> Sample File</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <form onSubmit={handleSubmit(saveData)}>
                                    <div className="container-fluid">
                                        <h1 className='text-center pt-5'>અમરાપર(ધાનાણી) પટેલ સમાજ - સુરત</h1>
                                        <div className="row d-flex">
                                            <div className="justify-content-center d-flex p-3">
                                                <div className="form-input">
                                                    <input
                                                        type="number"
                                                        placeholder="Enter subtitle"
                                                        name='MemberID'
                                                        value={formData.MemberID}
                                                        id="subtitle"
                                                        {...register("MemberID", { required: false })}
                                                    />
                                                    <label for="subtitle">સભ્ય નંબર</label>
                                                </div>
                                                <div className="form-input">
                                                    <input
                                                        type="number"
                                                        name="Number"
                                                        placeholder="Enter subtitle"
                                                        value={formData.FormNumber}
                                                        onChange={handleChange}
                                                        {...register("FormNumber", { required: false })}
                                                    />
                                                    <label for="subtitle">ફોર્મ નંબર</label>
                                                </div>
                                                <div className="form-input">
                                                    <input
                                                        type="date"
                                                        name="Number"
                                                        //    placeholder="Enter subtitle"
                                                        value={formData.BirthDate}
                                                        onChange={handleChange}
                                                        {...register("BirthDate", { required: false })}
                                                    />
                                                    <label for="subtitle">તારીખ</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-7 pt-2 d-flex">
                                                    <label className='pt-2 fs-5 fw-bold'> નામ:- </label>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.SurName}
                                                            onChange={handleChange}
                                                            {...register("SurName", { required: false })}
                                                        />
                                                        <label for="subtitle">અટક</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="MemberName"
                                                            placeholder="Enter subtitle"
                                                            value={formData.MemberName}
                                                            onChange={handleChange}
                                                            {...register("MemberName", { required: false })}
                                                        />
                                                        <label for="subtitle">નામ</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="lname"
                                                            placeholder="Enter subtitle"
                                                            value={formData.FatherName}
                                                            onChange={handleChange}
                                                            {...register("FatherName", { required: false })} />
                                                        <label for="subtitle">પિતા નુ નામ</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.GFatherName}
                                                            onChange={handleChange}
                                                            {...register("GFatherName", { required: false })} />
                                                        <label for="subtitle">દાદા</label>
                                                    </div>
                                                </div>
                                                <div className="col-5 d-flex pt-2 ">
                                                    <div className="form-input ">
                                                        <input
                                                            type="text"
                                                            name="relation"
                                                            placeholder="Enter subtitle"
                                                            value={formData.RelationWithMainMember}
                                                            onChange={handleChange}
                                                            {...register("RelationWithMainMember", { required: false })} />
                                                        <label for="subtitle">સભ્ય સાથે નું સગપણ </label>
                                                    </div>
                                                    <div className="form-input ">
                                                        <input
                                                            type="text"
                                                            name="stdy"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Education}
                                                            onChange={handleChange}
                                                            {...register("Education", { required: false })} />
                                                        <label for="subtitle">અભ્યાસ </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* મોસાળ ની વિગત   */}
                                            <div className="row py-4">
                                                <div className="col-7 pt-2 d-flex">
                                                    <label className='pt-2  fw-bold'> મોસાળ ની વિગત:- </label>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Mat_SurName}
                                                            onChange={handleChange}
                                                            {...register("Mat_SurName", { required: false })} />
                                                        <label for="subtitle">અટક</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Mat_Name}
                                                            onChange={handleChange}
                                                            {...register("Mat_Name", { required: false })}
                                                        />
                                                        <label for="subtitle">નામ</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Mat_FatherName}
                                                            onChange={handleChange}
                                                            {...register("Mat_FatherName", { required: false })}
                                                        />
                                                        <label for="subtitle">પિતા નુ નામ</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Mat_Village}
                                                            onChange={handleChange}
                                                            {...register("Mat_Village", { required: false })} />
                                                        <label for="subtitle">ગામ</label>
                                                    </div>
                                                </div>
                                                <div className="col-5 d-flex pt-2 ">
                                                    <div className="form-input ">
                                                        <input
                                                            type="date"
                                                            name="dbdate"
                                                            placeholder="Enter subtitle"
                                                            value={formData.BirthDate}
                                                            onChange={handleChange}
                                                            {...register("BirthDate", { required: false })} />
                                                        <label for="subtitle">જન્મતારીખ</label>
                                                    </div>
                                                    <div className="select col-12 col-lg-6 col-sm-4 col-md-4">
                                                        <Dropdown
                                                            value={formData.BloodGrp}
                                                            onChange={(e) => setFormData({ ...formData, BloodGrp: e.value })}
                                                            options={bloodGroupOptions.map((option) => ({ label: option.Name, value: option.Code }))}
                                                            placeholder="બ્લડ ગ્રૂપ"
                                                            filter
                                                            className="w-100 view"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row p-3 ">
                                                <div className="col-7 ">
                                                    <div className="form-input">
                                                        <input
                                                            className=''
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Address}
                                                            onChange={handleChange}
                                                            {...register("Address", { required: false })} />
                                                        <label for="subtitle">સરનામું </label>
                                                    </div>
                                                </div>
                                                <div className="col-5 d-flex ">
                                                    <div className="select">
                                                        <div className="view">
                                                            <Dropdown
                                                                value={formData.Gender}
                                                                onChange={handleDropdownChange('Gender')}
                                                                options={genderOptions}
                                                                placeholder="જાતિ"
                                                                className="w-100 view"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="select">
                                                        <div className="view">
                                                            <Dropdown
                                                                value={formData.MaritalStatus}
                                                                onChange={handleDropdownChange('MaritalStatus')}
                                                                options={maritalStatusOptions}
                                                                placeholder="પરણિત સ્થિતિ"
                                                                className="w-100 view"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-7 pt-4 d-flex">

                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Business}
                                                            onChange={handleChange}
                                                            {...register("Business", { required: false })} />
                                                        <label for="subtitle">વ્યવસાય</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Enter subtitle"
                                                            value={formData.Business_address}
                                                            onChange={handleChange}
                                                            {...register("Business_address", { required: false })} />
                                                        <label for="subtitle">વ્યવસાય નુ સરનામું</label>
                                                    </div>
                                                </div>
                                                <div className="col-5 pt-4 ">
                                                    <div className="form-input ">
                                                        <input
                                                            type="text"
                                                            name="nir"
                                                            className='w-50'
                                                            placeholder="Enter subtitle"
                                                            value={formData.Foreign_Resident_Address}
                                                            onChange={handleChange}
                                                            {...register("Foreign_Resident_Address", { required: false })} />
                                                        <label for="subtitle">વિદેશ રહેઠાણ </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row pt-3">
                                                <div className="col-7 pt-3 d-flex">

                                                    <div className="form-input">
                                                        <input
                                                            type="tel"
                                                            name="phone1"
                                                            value={formData.Mobile_1}
                                                            onChange={handleChange}
                                                            pattern="\d{10}"
                                                            maxLength="10"
                                                            placeholder="01234 56789"
                                                            {...register("Mobile_1", { required: false })}
                                                        />
                                                        <label for="subtitle">મો.ન.(૧)</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="tel"
                                                            name="phone2"
                                                            value={formData.Mobile_2}
                                                            onChange={handleChange}
                                                            pattern="\d{10}"
                                                            maxLength="10"
                                                            placeholder="01234 56789"
                                                            {...register("Mobile_2", { required: false })}
                                                        />
                                                        <label for="subtitle">મો.ન.(૨)</label>
                                                    </div>
                                                    <div className="form-input">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Enter subtitle"
                                                            value={formData.EmailID}
                                                            onChange={handleChange}
                                                            {...register("EmailID", { required: false })} />
                                                        <label for="subtitle">ઈમેલ</label>
                                                    </div>
                                                </div>
                                                <div className="col-5 d-flex ">
                                                    <div className="p-3">
                                                        <button type="submit" className='btn btn-primary' onClick={handleSubmit(saveData)}>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <div className="container-fluid">
                <h2 className='text-center p-4'>કૌટુંબિક સભ્યના નામ </h2>
                <table className="table table-bordered" >
                    <thead >
                        <tr>
                            <th>ક્રમ</th>
                            <th>નામ</th>
                            <th>સભ્ય સાથે નું સગપણ</th>
                            <th>ઈમેલ</th>
                            <th>જન્મતારીખ</th>
                            <th>બ્લડગ્રૂપ</th>
                            <th>અભ્યાસ</th>
                            <th>જાતિ</th>
                            <th>પરણિત સ્થિતિ</th>
                            <th>વિદેશી રહેઠાણ</th>
                        </tr>
                    </thead>
                    <tbody border="1">
                        {
                            Array.isArray(tableData) && tableData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.MemberName} {data.FatherName}</td>
                                    <td>{data.RelationWithMainMember}</td>
                                    <td>{data.EmailID}</td>
                                    <td>{data.BirthDate}</td>
                                    <td>{data.BloodGrp}</td>
                                    <td>{data.Education}</td>
                                    <td>{data.Gender}</td>
                                    <td>{data.MaritalStatus}</td>
                                    <td>{data.Foreign_Resident_Address}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <FileImpComp
                show={show}
                handleClose={handleClose}
                onDone={handleDone}
                FileName={FileName}
            />
        </>
    )
}

export default FormPage
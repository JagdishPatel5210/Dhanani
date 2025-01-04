import React, { useEffect, useState } from 'react';
import { Accordion, Modal } from 'react-bootstrap';
import './Main.css'
import { useDispatch, useSelector } from 'react-redux';
import { addData as DynamicAdd, fetchDataNew as DynamicFetchNew } from '../Slices/DynamicSlice.js';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { FileDownloader } from '../Slices/common.js';
import FamilyFormImport from '../ImportExcelSympleFile/Family Form.xlsx';
import { FaDownload, FaFileImport } from 'react-icons/fa';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { IoHome } from 'react-icons/io5'; 
import { IoIosSave } from 'react-icons/io';
import { startLoader, stopLoader } from '../Slices/loaderSlice.js';
import { Link } from 'react-router-dom';

function FormPage() {

    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    // Form data માટે state
    const [formData, setFormData] = useState({
        MemberID: null, FormNumber: null, FormDate: null, SurName: null, MemberName: null, FatherName: null, GFatherName: null, RelationWithMainMember: null, Education: null,
        Mat_SurName: null, Mat_Name: null, Mat_FatherName: null, Mat_Village: null, BirthDate: null, BloodGrp: null, Foreign_Resident_Address: null, Gender: null,
        MaritalStatus: null, Business: null, Business_Address: null, Mobile_1: null, Mobile_2: null, EmailID: null

    });

    const [tableData, setTableData] = useState([]);
    const [optionsBloodGrp, setoptionsBloodGrp] = useState([]);
    const [MemberID, setMemberID] = useState(1);
    const DropDown = useSelector(state => state.DropDownDT);
    const [showModal, setShowModal] = useState(false);
    const [exceldata, setexceldata] = useState([]);
    const [defaultSumMaryDate, setDefaultSummaryDate] = useState(new Date().toISOString().split('T')[0]);

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
        // let ObjJsonDet = {
        //     jsonObj1: [{ MEMBERID: 0 }],
        //     SPName: "API_MemberDetailDisp"
        // }

        // const fetchData = async () => {
        //     dispatch(startLoader());
        //     let DetDT = await DynamicFetchNew(ObjJsonDet);
        //     if (Array.isArray(DetDT)) {
        //         console.log(DetDT);
        //         setTableData(DetDT);
        //     } else {
        //         console.error('Data is not in the expected array format:', DetDT);
        //         setTableData([]);
        //     }

        //     dispatch(stopLoader())
        // };

        // fetchData();
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
            setTableData([...tableData, { ...newObj, MemberID }]); // Add form data with MemberID to tableData
            reset(); // Reset form after submission
            setFormData({
                MemberID: MemberID + 1, FormNumber: '', FormDate: '', SurName: '', MemberName: '', FatherName: '', GFatherName: '', RelationWithMainMember: '', Education: '',
                Mat_SurName: '', Mat_Name: '', Mat_FatherName: '', Education: '', Mat_Village: '', BirthDate: '', BloodGrp: '', Foreign_Resident_Address: '', Gender: '',
                MaritalStatus: '', Business: '', Business_Address: '', Mobile_1: '', Mobile_2: '', EmailID: ''
            }); // Clear form data
            setMemberID(MemberID + 1); // Increment MemberID for the next entry
        } catch (error) {
            console.error("Failed to save data!", error);
        }
    };

    const handleDownloadMFG = () => {
        FileDownloader(FamilyFormImport, "Family Form" + '.xls');
    };

    const handleClose = () => setShowModal(false)
    const handleShow = () => {
        setexceldata()
        setShowModal(true);
    }

    const handleDateChange = (date) => {
        if (date && date.isValid && date.isValid()) {
            setDefaultSummaryDate(date);
        }
        setFormData({ ...formData, I_DATE: date })
    };

    return (
        <>
            <div className='p-1'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header></Accordion.Header>
                        <Accordion.Body>
                            <div className='row'>
                                <div className='col-12 text-end'>
                                <Link to='/MainPage'> <IoHome  className='address2 text-light mx-2' size={30} /></Link>
                                    <button type="submit" className='btn-success'>
                                        <FaFileImport size={17} className='me-2' />
                                        Import FIle
                                    </button>
                                    <button type="submit" className='btn-success ms-2' onClick={handleDownloadMFG}>
                                        <FaDownload size={17} className='me-2' />
                                        Sample File
                                    </button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 '>
                                    <form onSubmit={handleSubmit(saveData)}>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <h2 className='text-center fw-semibold pt-4'>અમરાપુર(ધાનાણી) પટેલ સમાજ - સુરત</h2>
                                            </div>
                                        </div>
                                        <div className="row ps-2">
                                            <div className='d-flex flex-wrap align-items-center pt-3'>
                                                <div className='col-2'>
                                                    <div className="form-input">
                                                        <input
                                                            type="numeric"
                                                            placeholder="Enter subtitle"
                                                            name='MemberID'
                                                            // value={formData.MemberID}
                                                            id="subtitle"
                                                            {...register("MemberID", { required: false })}
                                                        />
                                                        <label for="subtitle">સભ્ય નંબર</label>
                                                    </div>
                                                </div>
                                                <div className='col-2'>
                                                    <div className="form-input">
                                                        <input
                                                            type="numeric"
                                                            name="FormNumber"
                                                            className='inputbox'
                                                            placeholder="Enter subtitle"
                                                            // value={formData.FormNumber}
                                                            onChange={handleChange}
                                                            {...register("FormNumber", { required: false })}
                                                        />
                                                        <label for="subtitle ">ફોર્મ નંબર</label>
                                                    </div>
                                                </div>
                                                <div className='col-2 ms-2'>
                                                    <div className="input-Date">
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                className='inpur-Date '
                                                                format="DD/MM/YYYY"
                                                                defaultValue={dayjs(defaultSumMaryDate)}
                                                                // value={dayjs(formData.I_DATE)}
                                                                onChange={handleDateChange}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' row ps-2 d-flex flex-wrap align-items-center pt-3'>
                                            <div className='col-1 spese'>
                                                <label className='fw-bold'> સભ્યનુ નામ:- </label>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.SurName}
                                                        onChange={handleChange}
                                                        {...register("SurName", { required: false })}
                                                    />
                                                    <label for="subtitle">અટક</label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="MemberName"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.MemberName}
                                                        onChange={handleChange}
                                                        {...register("MemberName", { required: false })}
                                                    />
                                                    <label for="subtitle">નામ</label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="lname"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.FatherName}
                                                        onChange={handleChange}
                                                        {...register("FatherName", { required: false })} />
                                                    <label for="subtitle">પિતા નુ નામ</label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.GFatherName}
                                                        onChange={handleChange}
                                                        {...register("GFatherName", { required: false })} />
                                                    <label for="subtitle">દાદા</label>
                                                </div>
                                            </div>
                                            <div className='col-2 box'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="relation"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.RelationWithMainMember}
                                                        onChange={handleChange}
                                                        {...register("RelationWithMainMember", { required: false })} />
                                                    <label for="subtitle">સભ્ય સાથે નું સગપણ</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='d-flex ps-2 flex-wrap align-items-center pt-3'>
                                            <div className='col-1 spese'>
                                                <label className='fw-bold'> મોસાળની વિગત:- </label>
                                            </div>
                                            <div className='col-2 ps-3'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Mat_SurName}
                                                        onChange={handleChange}
                                                        {...register("Mat_SurName", { required: false })} />
                                                    <label for="subtitle">અટક</label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Mat_Name}
                                                        onChange={handleChange}
                                                        {...register("Mat_Name", { required: false })}
                                                    />
                                                    <label for="subtitle">નામ</label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Mat_FatherName}
                                                        onChange={handleChange}
                                                        {...register("Mat_FatherName", { required: false })}
                                                    />
                                                    <label for="subtitle">પિતા નુ નામ</label>
                                                </div>
                                            </div>
                                            <div className='col-2'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Mat_Village}
                                                        onChange={handleChange}
                                                        {...register("Mat_Village", { required: false })} />
                                                    <label for="subtitle">ગામ</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row  ps-2 align-items-center pt-3'>
                                            <div className='col-2 input-DropDown box'>
                                                <Dropdown
                                                    value={formData.BloodGrp}
                                                    onChange={(e) => setFormData({ ...formData, BloodGrp: e.target.value })}
                                                    options={bloodGroupOptions?.map((option) => ({ label: option.Name, value: option.Code }))}
                                                    placeholder="બ્લડ ગ્રૂપ"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className='col-2 d-flex box'>
                                                <label className='fw-bold pt-2'> જન્મતારીખ:-</label>
                                                <div className="form-input ">
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker
                                                            className='inpur-Date'
                                                            format="DD/MM/YYYY"
                                                            defaultValue={dayjs(defaultSumMaryDate)}
                                                            // value={dayjs(formData.I_DATE)}
                                                            onChange={handleDateChange}
                                                            {...register("BirthDate", { required: true })}
                                                        />
                                                    </LocalizationProvider>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row ps-1 pt-3'>
                                            <div className='col-12'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Address}
                                                        onChange={handleChange}
                                                        {...register("Address", { required: false })} />
                                                    <label for="subtitle">સરનામું </label>
                                                </div>
                                            </div>
                                            </div>
                                        
                                        <div className='row ps-2 align-items-center pt-3'>
                                            <div className='col-2 input-DropDown inputbox'>
                                                <Dropdown
                                                    value={formData.Gender}
                                                    onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}
                                                    options={genderOptions?.map((option) => ({ label: option.label, value: option.value }))}
                                                    placeholder="જાતિ"
                                                    className="w-25"
                                                />
                                            </div>
                                            <div className='col-2 input-DropDown inputbox'>
                                                <Dropdown
                                                    value={formData.MaritalStatus}
                                                    onChange={(e) => setFormData({ ...formData, MaritalStatus: e.target.value })}
                                                    options={maritalStatusOptions?.map((option) => ({ label: option.label, value: option.value }))}
                                                    placeholder="પરિણીત સ્થિતિ"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className='col-2 inputbox'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Mat_FatherName}
                                                        onChange={handleChange}
                                                        {...register("Education", { required: false })}
                                                    />
                                                    <label for="subtitle">અભ્યાસ</label>
                                                </div>
                                            </div>
                                            </div>
                                        

                                        <div className='d-flex flex-wrap align-items-center pt-3'>
                                            <div className='col-2 '>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Business}
                                                        onChange={handleChange}
                                                        {...register("Business", { required: false })} />
                                                    <label for="subtitle">વ્યવસાય</label>
                                                </div>
                                            </div>
                                            <div className='col-2 box'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Business_Address}
                                                        onChange={handleChange}
                                                        {...register("Business_address", { required: false })} />
                                                    <label for="subtitle">વ્યવસાય નુ સરનામું</label>
                                                </div>
                                            </div>
                                            <div className='col-2 inputbox'>
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        name="nir"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.Foreign_Resident_Address}
                                                        onChange={handleChange}
                                                        {...register("Foreign_Resident_Address", { required: false })} />
                                                    <label for="subtitle">વિદેશ રહેઠાણ </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='d-flex flex-wrap align-items-center pt-3'>
                                            <div className='col-2 inputbox'>
                                                <div className="form-input">
                                                    <input
                                                        type="tel"
                                                        name="phone1"
                                                        // value={formData.Mobile_1}
                                                        onChange={handleChange}
                                                        pattern="\d{10}"
                                                        maxLength="10"
                                                        placeholder="01234 56789"
                                                        {...register("Mobile_1", { required: false })}
                                                    />
                                                    <label for="subtitle">મો.ન.(૧)</label>
                                                </div>
                                            </div>
                                            <div className='col-2 inputbox'>
                                                <div className="form-input">
                                                    <input
                                                        type="tel"
                                                        name="phone2"
                                                        // value={formData.Mobile_2}
                                                        onChange={handleChange}
                                                        pattern="\d{10}"
                                                        maxLength="10"
                                                        placeholder="01234 56789"
                                                        {...register("Mobile_2", { required: false })}
                                                    />
                                                    <label for="subtitle">મો.ન.(૨)</label>
                                                </div>
                                            </div>
                                            <div className='col-2 inputbox'>
                                                <div className="form-input">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter subtitle"
                                                        // value={formData.EmailID}
                                                        onChange={handleChange}
                                                        {...register("EmailID", { required: false })} />
                                                    <label for="subtitle">ઈમેલ</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row pt-3'>
                                            <div className='col-12 d-none'>
                                                <button type='button' className='btn-primary' onClick={handleSubmit(saveData)}>
                                                    <IoIosSave size={20} className='me-1' />
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <div className="container-fluid">
                    <h4 className='text-center fw-semibold text-success pt-5'>કૌટુંબિક સભ્યના નામ </h4>
                    <div className='row'>
                        <div className="col-12 table-responsive ">
                            <table className="table table-bordered">
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
                    </div>
                </div>

                {/* <div className='p-1'></div> */}
            </div>
        </>
    )
}

export default FormPage
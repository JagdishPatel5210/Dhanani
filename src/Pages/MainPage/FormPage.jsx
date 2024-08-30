import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './Main.css'

function FormPage() {
    // Form data માટે state
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        relation: '',
        email: '',
        dbdate: ' ',
        bloodGroup: '',
        stdy: '',
        gender: '',
        nir: ''

    });

    // Table data માટે state
    const [tableData, setTableData] = useState([]);

    // Form field value handle કરવું
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    // Form submit કરો
    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, formData]); // form data ને tableData state માં add કરો
        setFormData({ fname: '', lname: '', relation: '', email: '', dbdate: ' ', bloodGroup: '', stdy: '', gender: '', maritalStatus: '', nir: '' }); // Form reset
    }



    return (
        <>


            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="container-fluid">
                                <h1 className='text-center pt-5'>અમરાપર(ધાનાણી) પટેલ સમાજ - સુરત</h1>
                                <div className="row d-flex">
                                    <div className="justify-content-center d-flex p-3">
                                        <div className='p-3'>
                                            <label className='p-2 fw-bold'> સભ્ય નંબર:- </label>
                                            <input
                                                type="number"
                                                name="Number"
                                                value={formData.membernum}
                                                onChange={handleChange} />
                                        </div>

                                        <div className='p-3'>
                                            <label className='p-2 fw-bold'> ફોર્મ નંબર:- </label>
                                            <input
                                                type="number"
                                                name="Number"
                                                value={formData.fromnum}
                                                onChange={handleChange} />
                                        </div>

                                        <div className='p-3'>
                                            <label className='p-2 fw-bold'>તારીખ:-</label>
                                            <input
                                                type="date"
                                                name="Number"
                                                value={formData.fromdate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-7 pt-2 d-flex ">
                                            <label className='p-2 mt-3 fw-bold'> નામ :- </label>
                                            <div className='ps-2 '>
                                                <div className='d-grid'>
                                                    <label >અટક</label>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        value={formData.surname}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='ps-2'>
                                                <div className='d-grid'>
                                                    <label >નામ</label>
                                                    <input
                                                        type="text"
                                                        name="fname"
                                                        value={formData.fname}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className='ps-2'>
                                                <div className='d-grid'>
                                                    <label >પિતા નુ નામ</label>
                                                    <input
                                                        type="text"
                                                        name="lname"
                                                        value={formData.lname}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className='ps-2'>
                                                <div className='d-grid'>
                                                    <label >દાદા</label>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        value={formData.dadaname}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 d-flex ">
                                            <div className="p-4">
                                                <label className=' mt-3 fw-bold '> સભ્ય સાથે નું સગપણ :- </label>
                                                <input
                                                    type="text"
                                                    name="relation"
                                                    value={formData.relation}
                                                    onChange={handleChange} />
                                            </div>
                                            <div className="p-4">
                                                <label className='mt-3 fw-bold'> અભ્યાસ :- </label>
                                                <input
                                                    type="text"
                                                    name="stdy"
                                                    value={formData.stdy}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 pt-2 d-flex ">
                                            <label className='p-2 mt-3 fw-bold'> મોસાળ ની વિગત :- </label>
                                            <div className='ps-2 '>
                                                <div className='d-grid'>
                                                    <label >અટક</label>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        value={formData.number}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='ps-2'>
                                                <div className='d-grid'>
                                                    <label >નામ</label>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        value={formData.number}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className='ps-2'>
                                                <div className='d-grid'>
                                                    <label >પિતા નુ નામ</label>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        value={formData.number}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className='ps-2'>
                                                <div className='d-grid'>
                                                    <label >ગામ</label>
                                                    <input
                                                        type="text"
                                                        name="Name"
                                                        value={formData.number}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5  d-flex justify-align-content-between">
                                            <div className='p-3 mt-4'>
                                                <label className='p-2 fw-bold'>જન્મતારીખ:-</label>
                                                <input
                                                    type="date"
                                                    name="dbdate"
                                                    value={formData.dbdate}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='px-5 mt-4'>
                                                <label className='p-2 mt-3 fw-bold'>બ્લડ ગ્રૂપ:-</label>
                                                <select
                                                    name="bloodGroup"
                                                    value={formData.bloodGroup}
                                                    onChange={handleChange}>
                                                    <option value="">પસંદ કરો</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B+">B+</option>
                                                    <option value="B-">B-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                    <option value="O+">O+</option>
                                                    <option value="O-">O-</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 ">
                                            <label className='p-2 mt-3 fw-bold'> સરનામું :- </label>
                                            <input
                                                className='w-75'
                                                type="text"
                                                name="Name"
                                                value={formData.number}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="col-5 d-flex p-0  justify-content-around">
                                            <div className='p-2'>
                                                <label className='p-2 mt-3 fw-bold'>જાતિ:-</label>
                                                <select
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleChange}>
                                                    <option value="">પસંદ કરો</option>
                                                    <option value="પુરુષ">પુરુષ</option>
                                                    <option value="સ્ત્રી">સ્ત્રી</option>
                                                </select>
                                            </div>
                                            <div className='p-2'>
                                                <label className='p-2 mt-3 fw-bold'>પરણિત સ્થિતિ:-</label>
                                                <select
                                                    name="maritalStatus"
                                                    value={formData.maritalStatus}
                                                    onChange={handleChange}>
                                                    <option value="">પસંદ કરો</option>
                                                    <option value="પરણિત">પરણિત</option>
                                                    <option value="અપરણિત">અપરણિત</option>
                                                </select>
                                            </div>
                                            <div className="p-3">
                                                <div class="form-check p-3">
                                                    <input type="checkbox"
                                                        name="nir"
                                                        value={formData.nir}
                                                        onChange={handleChange}
                                                        class="form-check-input"
                                                        id="option1" />
                                                    <label class="form-check-label fw-bold" for="option1"> વિદેશ રહેઠાણ</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-6 d-flex">
                                            <div className="">
                                                <label className='p-2 mt-3 fw-bold'> વ્યવસાય :- </label>
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                            </div>
                                            <div className="ps-3">
                                                <label className='p-2 mt-3 fw-bold'> વ્યવસાય નુ સરનામું :- </label>
                                                <input
                                                    className='justify-content-end'
                                                    type="text"
                                                    name="Name"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-6 ">
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-7 pt-3 d-flex">
                                            <div className='p-3 d-flex'>
                                                <label className='p-2 fw-bold'>મો.ન.(૧) :-</label>
                                                <input
                                                    type="tel"
                                                    name="phone1"
                                                    value={formData.phone1}
                                                    onChange={handleChange}
                                                    pattern="\d{10}"
                                                    maxLength="10"
                                                    placeholder="01234 56789"
                                                />
                                            </div>
                                            <div className='p-3 d-flex'>
                                                <label className='p-2 fw-bold'>મો.ન.(૨) :- </label>
                                                <input
                                                    type="tel"
                                                    name="phone2"
                                                    value={formData.phone2}
                                                    onChange={handleChange}
                                                    pattern="\d{10}"
                                                    maxLength="10"
                                                    placeholder="01234 56789"
                                                />
                                            </div>

                                            <div className="p-4">
                                                <label className=' fw-bold '> ઈમેલ:- </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-5 d-flex justify-content-center">
                                            <div className="pt-3">
                                                <button type="submit" className='btn btn-primary'>Submit</button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



            <div class="container-fluid">
                <h2 className='text-center p-4'>કૌટુંબિક સભ્યના નામ </h2>
                <table class="table table-bordered" >
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
                            tableData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.fname} {data.lname}</td>
                                    <td>{data.relation}</td>
                                    <td>{data.email}</td>
                                    <td>{data.dbdate}</td>
                                    <td>{data.bloodGroup}</td>
                                    <td>{data.stdy}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.maritalStatus}</td>
                                    <td>{data.nir}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>




        </>
    )
}

export default FormPage
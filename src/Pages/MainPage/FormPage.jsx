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

                                        <div class="form-input">
                                            <input
                                                type="number"
                                                placeholder="Enter subtitle"
                                                id="subtitle" />
                                            <label for="subtitle">સભ્ય નંબર</label>
                                        </div>

                                        <div class="form-input">
                                            <input
                                                type="number"
                                                name="Number"
                                                placeholder="Enter subtitle"
                                                value={formData.fromnum}
                                                onChange={handleChange} />
                                            <label for="subtitle">ફોર્મ નંબર</label>
                                        </div>


                                        <div class="form-input">
                                            <input
                                                type="date"
                                                name="Number"
                                                //    placeholder="Enter subtitle"
                                                value={formData.fromdate}
                                                onChange={handleChange}
                                            />
                                              <label for="subtitle">તારીખ</label>
                                        </div>

                                    </div>


                                    <div className="row">
                                        <div className="col-7 pt-2 d-flex">
                                            <label className='pt-2 fs-5 fw-bold'> નામ:- </label>

                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.surname}
                                                    onChange={handleChange} />
                                                <label for="subtitle">અટક</label>
                                            </div>

                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    placeholder="Enter subtitle"
                                                    value={formData.fname}
                                                    onChange={handleChange} />
                                                <label for="subtitle">નામ</label>
                                            </div>

                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    placeholder="Enter subtitle"
                                                    value={formData.lname}
                                                    onChange={handleChange} />
                                                <label for="subtitle">પિતા નુ નામ</label>
                                            </div>


                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.dadaname}
                                                    onChange={handleChange} />
                                                <label for="subtitle">દાદા</label>
                                            </div>
                                        </div>


                                        <div className="col-5 d-flex pt-2 ">
                                            <div class="form-input ">
                                                <input
                                                    type="text"
                                                    name="relation"
                                                    placeholder="Enter subtitle"
                                                    value={formData.relation}
                                                    onChange={handleChange} />
                                                <label for="subtitle">સભ્ય સાથે નું સગપણ </label>
                                            </div>

                                            <div class="form-input ">
                                                <input
                                                    type="text"
                                                    name="stdy"
                                                    placeholder="Enter subtitle"
                                                    value={formData.stdy}
                                                    onChange={handleChange} />
                                                <label for="subtitle">અભ્યાસ </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* મોસાળ ની વિગત   */}

                                    <div className="row py-4">
                                        <div className="col-7 pt-2 d-flex">
                                            <label className='pt-2  fw-bold'> મોસાળ ની વિગત:- </label>

                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                                <label for="subtitle">અટક</label>
                                            </div>

                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                                <label for="subtitle">નામ</label>
                                            </div>


                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                                <label for="subtitle">પિતા નુ નામ</label>
                                            </div>


                                            <div class="form-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                                <label for="subtitle">ગામ</label>
                                            </div>
                                        </div>


                                        <div className="col-5 d-flex pt-2 ">
                                            <div class="form-input ">
                                                <input
                                                    type="date"
                                                    name="dbdate"
                                                    placeholder="Enter subtitle"
                                                    value={formData.dbdate}
                                                    onChange={handleChange} />
                                                <label for="subtitle">જન્મતારીખ</label>
                                            </div>

                                            <div class="select">
                                            <label className='m-2 fw-bold'>બ્લડ ગ્રૂપ :- </label> 
                                                <div class="view">
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
                                    </div>



                                    <div className="row p-3 ">
                                    <div className="col-7 ">
                                        <div class="form-input">
                                        <input
                                                className=''
                                                type="text"
                                                name="Name"
                                                placeholder="Enter subtitle"
                                                value={formData.number}
                                                onChange={handleChange} />
                                                <label for="subtitle">સરનામું </label>
                                            </div>
                                        </div>


                                        <div className="col-5 d-flex ">
                                        <div class="select">
                                            <label className='m-2 fw-bold'>જાતિ:- </label> 
                                                <div class="view">
                                                <select
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleChange}>
                                                    <option value="">પસંદ કરો</option>
                                                    <option value="પુરુષ">પુરુષ</option>
                                                    <option value="સ્ત્રી">સ્ત્રી</option>
                                                </select>
                                                </div>
                                            </div>


                                            <div class="select">
                                            <label className='m-2 fw-bold'>પરણિત સ્થિતિ:- </label> 
                                                <div class="view">
                                                <select
                                                    name="maritalStatus"
                                                    value={formData.maritalStatus}
                                                    onChange={handleChange}>
                                                    <option value="">પસંદ કરો</option>
                                                    <option value="પરણિત">પરણિત</option>
                                                    <option value="અપરણિત">અપરણિત</option>
                                                </select>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-7 pt-4 d-flex">
                                           
                                        <div class="form-input">
                                        <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                                <label for="subtitle">વ્યવસાય</label>
                                            </div>

                                            <div class="form-input">
                                        <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Enter subtitle"
                                                    value={formData.number}
                                                    onChange={handleChange} />
                                                <label for="subtitle">વ્યવસાય નુ સરનામું</label>
                                            </div>
                                        </div>

                                        <div className="col-5 pt-4 ">
                                        <div class="form-input ">
                                        <input
                                                    type="text"
                                                    name="nir"
                                                    className='w-50'
                                                    placeholder="Enter subtitle"
                                                    value={formData.nir}
                                                    onChange={handleChange} />
                                                <label for="subtitle">વિદેશ રહેઠાણ </label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row pt-3">
                                        <div className="col-7 pt-3 d-flex">

                                        <div class="form-input">
                                        <input
                                                    type="tel"
                                                    name="phone1"
                                                    value={formData.phone1}
                                                    onChange={handleChange}
                                                    pattern="\d{10}"
                                                    maxLength="10"
                                                    placeholder="01234 56789"
                                                />
                                                <label for="subtitle">મો.ન.(૧)</label>
                                            </div>

                                               <div class="form-input">
                                               <input
                                                    type="tel"
                                                    name="phone2"
                                                    value={formData.phone2}
                                                    onChange={handleChange}
                                                    pattern="\d{10}"
                                                    maxLength="10"
                                                    placeholder="01234 56789"
                                                />
                                                <label for="subtitle">મો.ન.(૨)</label>
                                            </div>

                                            <div class="form-input">
                                            <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter subtitle"
                                                    value={formData.email}
                                                    onChange={handleChange} />
                                                <label for="subtitle">ઈમેલ</label>
                                            </div>

                                        </div>
                                        <div className="col-5 d-flex justify-content-center">
                                            <div className="p-5">
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
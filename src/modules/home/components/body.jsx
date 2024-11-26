//****BODY*****
<content>
//* our features jobs
    <section>
        <div>
        <h2>Our Features Jobs</h2>
        </div>

        <article>
        <div>
        <div><p>Full Time</p></div>
        <div><p>Glendale, CA</p></div>    
        </div>

        <div>
        <div>foto</div>
        <div><h2>Product Designer</h2></div>
        </div>

        <div><p>Marketing . $2.000 / Monthly</p></div>
        <button>Apply Now</button>
        </article>


        <article>
        <div>
        <div><p>Part Time</p></div>
        <div><p>Glen wood, CA</p></div>    
        </div>

        <div>
        <div>foto</div>
        <div><h2>Product Manager</h2></div>
        </div>

        <div><p>Marketing . $2.000 / Monthly</p></div>
        <button>Apply Now</button>
        </article>


        <article>
        <div>
        <div><p>Part Time</p></div>
        <div><p>Glendale, CA</p></div>    
        </div>

        <div>
        <div>foto</div>
        <div><h2>Sofware Engineer</h2></div>
        </div>

        <div><p>Marketing . $2.000 / Monthly</p></div>
        <button>Apply Now</button> 
        </article>


        <article>
        <div>
        <div><p>Full Time</p></div>
        <div><p>Glendale, CA</p></div>    
        </div>

        <div>
        <div>foto</div>
        <div><h2>Customer Support</h2></div>
        </div>

        <div><p>Marketing . $2.000 / Monthly</p></div>
        <button>Apply Now</button>
        </article>


        <article>
        <div>
        <div><p>Full Time</p></div>
        <div><p>Glendale, CA</p></div>    
        </div>

        <div>
        <div>foto</div>
        <div><h2>Product Manager</h2></div>
        </div>

        <div><p>Marketing . $2.000 / Monthly</p></div>
        <button>Apply Now</button> 
        </article>


        <article>
        <div>
        <div><p>Full Time</p></div>
        <div><p>Glendale, CA</p></div>    
        </div>

        <div>
        <div>foto</div>
        <div><h2>Product Manager</h2></div>
        </div>

        <div><p>Marketing . $2.000 / Monthly</p></div>
        <button>Apply Now</button> 
        </article>
        /</section>

//* our categories
    <section>
        <div>
        <h2>Our Categories</h2>
        </div>

        <article>
        <div>foto</div>
        <p>Web Design</p>
        </article>
        
        <article>
        <div>foto</div>
        <p>Web Development</p>
        </article>
        
        <article>
        <div>foto</div>
        <p>Marqueting</p>
        </article>
        
        <article>
        <div>foto</div>
        <p>Data Entry</p>
        </article>
        
        <article>
        <div>foto</div>
        <p>Sofware Engineer</p>
        </article>
        
        <article>
        <div>foto</div>
        <p>Grafic Designer</p>
        </article>
        
    </section>

//* our blogs

    <section>
        <div>
        <h2>Our Blogs</h2>
        </div>

        <article>
        <div>foto</div>
        <div><loren>sssssssssssssssssssssssssssssss</loren></div>
        <div><loren>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</loren></div>
        </article>

        <article>
        <div>foto</div>
        <div><loren>sssssssssssssssssssssssssssssss</loren></div>
        <div><loren>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</loren></div>
        </article>

        <article>
        <div>foto</div>
        <div><loren>sssssssssssssssssssssssssssssss</loren></div>
        <div><loren>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</loren></div>
        </article>

    </section>

//* contact us
    <section>
    <form onSubmit={(e) => e.preventDefault()}>
        <p>All data are required.</p>
        <br/>

        <input type="text" placeholder='First Name:' {...register("First-name", {
            required: true,minLength:6,maxLength:15
        })} />
        {errors.nombreDelUsuario?.type === "required" && <p className='error-regProf'>Required field</p>}
        {errors.nombreDelUsuario?.type === "minLength" && <p className='error-regProf'>Maximo de 6 caracteres</p>}
        {errors.nombreDelUsuario?.type === "maxLength" && <p className='error-regProf'>Maximo de 15 caracteres</p>}

        <input type="text" placeholder='E-mail:'{...register("email", {
            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, 
            required: true
        })}/>
        {errors.email?.type === "pattern" && <p className='error-regProf'>Required field</p>}
        {errors.email?.type === "pattern" && <p className='error-regProf'>Formato del email incorrecto</p>}

        <input type="text" placeholder='Last Name:' {...register("Last-name", {
            required: true,minLength:6,maxLength:15
        })} />
        {errors.nombreDelUsuario?.type === "required" && <p className='error-regProf'>Required field</p>}
        {errors.nombreDelUsuario?.type === "minLength" && <p className='error-regProf'>Maximo de 6 caracteres</p>}
        {errors.nombreDelUsuario?.type === "maxLength" && <p className='error-regProf'>Maximo de 15 caracteres</p>}

        <input type="text" placeholder='Location:' {...register("Location", {
            required: true,minLength:6,maxLength:15
        })} />
        {errors.nombreDelUsuario?.type === "required" && <p className='error-regProf'>Required field</p>}
        {errors.nombreDelUsuario?.type === "minLength" && <p className='error-regProf'>Maximo de 6 caracteres</p>}
        {errors.nombreDelUsuario?.type === "maxLength" && <p className='error-regProf'>Maximo de 15 caracteres</p>}

        <label>Summary of your professional activity:<textarea name="postContent" rows={6} cols={40} 
        {...register("textarea", {
            required: true,
        })} />
        {errors.textarea?.type === "required" && <p className='error-regProf'>Required field</p>}
        </label>

        <div>
        <button >Aplly Now</button>  
        </div>

         <p>lampara, avion</p>

//* Help
        <section>
        <div>
        <p>Help</p>

        </div>

        <div>
        <p>Resources</p>
        </div>
        </section>

//*footer
    <section>
    <div>
        <p>Copyright 2024. All Rights Reserved bv Global Work Home 
            powered By InnovaGen Solution
        </p>
    <a href>
    <i className='bx bxl-facebook'></i>
    </a>

    <a href>
    <i className='bx bxl-twitter' ></i>
    </a>

    <a href>
    <i className='bx bxl-instagram-alt' ></i>
    </a>

    <a href>
    <i className='bx bxl-instagram-alt' ></i>
    </a>
    </div>
    </section>
    </form>
    </section>

</content>
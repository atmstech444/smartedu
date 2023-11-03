import Link from 'next/link';
import React from 'react';
import YellowBg from '../../../public/assets/img/shape/yellow-bg-2.png';
import Image from 'next/image';
import ServicesIconOne from '@/svg/services-icon-one';
import ServicesIconTwo from '@/svg/services-icon-two';
import ServicesIconThree from '@/svg/services-icon-tree';

const ServiceSection = () => {
    return (
        <section className="services__area pt-115 pb-40">
        <div className="container">
           <div className="row">
              <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                 <div className="section__title-wrapper section-padding mb-60 text-center">
                    <h2 className="section__title">Why an <span className="yellow-bg">scholercity <Image src={YellowBg} style={{width:"auto", height:"auto"}} alt="img not found" /></span> out of The ordinary</h2>
                    <p>You {`don't`} have to struggle alone, {`you've`} got our assistance and help.</p>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item blue-bg-4 mb-30">
                    <div className="services__icon">
                       <svg viewBox="0 0 24 24"><path d="m16 10c-1.431 0-2.861-.424-4.283-1.271-.442-.264-.717-.756-.717-1.286v-2.943c0-.276.224-.5.5-.5s.5.224.5.5v2.943c0 .176.09.343.229.426 2.538 1.514 5.004 1.514 7.541 0 .14-.083.23-.25.23-.426v-2.943c0-.276.224-.5.5-.5s.5.224.5.5v2.943c0 .529-.275 1.021-.718 1.285-1.421.848-2.851 1.272-4.282 1.272z"/><path d="m16 7c-.071 0-.143-.016-.209-.046l-6.5-3c-.178-.082-.291-.259-.291-.454s.113-.372.291-.454l6.5-3c.133-.061.286-.061.419 0l6.5 3c.177.082.29.259.29.454s-.113.372-.291.454l-6.5 3c-.066.03-.138.046-.209.046zm-5.307-3.5 5.307 2.449 5.307-2.449-5.307-2.449z"/><path d="m1.5 18c-.276 0-.5-.224-.5-.5v-15c0-1.379 1.122-2.5 2.5-2.5h6c.276 0 .5.224.5.5s-.224.5-.5.5h-6c-.827 0-1.5.673-1.5 1.5v15c0 .276-.224.5-.5.5z"/><path d="m7.5 20h-4c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5h14.5v-2.5c0-.276.224-.5.5-.5s.5.224.5.5v3c0 .276-.224.5-.5.5h-15c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h4c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m18.5 20h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.5v-3.5c0-.276.224-.5.5-.5s.5.224.5.5v4c0 .276-.224.5-.5.5z"/><path d="m12.5 24c-.111 0-.222-.037-.313-.109l-2.187-1.75-2.188 1.75c-.15.12-.355.143-.529.06-.173-.084-.283-.259-.283-.451v-6c0-.276.224-.5.5-.5s.5.224.5.5v4.96l1.688-1.351c.183-.146.442-.146.625 0l1.687 1.351v-4.96c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .192-.11.367-.283.45-.069.033-.143.05-.217.05z"/><path d="m14.5 18h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/></svg>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">4,000 <br /> Online courses</Link></h3>
                       <p>Arse over tit morish wind up gormless butty.!</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item pink-bg mb-30">
                    <div className="services__icon">
                      <ServicesIconOne/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">Job placement<br /> Support</Link></h3>
                       <p>Arse over tit morish wind up gormless butty.!</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item purple-bg mb-30">
                    <div className="services__icon">
                       <ServicesIconTwo/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">Lifetime<br /> Slack chat support</Link></h3>
                       <p>Arse over tit morish wind up gormless butty.!</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item green-bg mb-30">
                    <div className="services__icon">
                     <ServicesIconThree/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">Research<br />  and Innovation</Link></h3>
                       <p>Arse over tit morish wind up gormless butty.!</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    );
};

export default ServiceSection;
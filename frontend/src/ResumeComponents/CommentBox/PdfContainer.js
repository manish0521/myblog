import React from 'react';

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <div >
    <section className="pdf-container">
      <section className="pdf-toolbar">
        {/* <button className="fa fa-download color:primary" onClick={createPdf}>DOWNLOAD BLOG</button> */}
        <a className="button" onClick={createPdf}><i className="fa fa-download"></i>Download Blog</a>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
    </div>
  )
}
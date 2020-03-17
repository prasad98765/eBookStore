import React, { Component } from 'react'
import AdminLogin from '../src/component/adminComponent/singUpAndSign'
import Footer from './component/footer/footer'
// import Validation from './component/validation/validation'
// import Pagination from './component/pagination/pagination'
// import ConfirmPass from './component/adminComponent/confirmPass'
export class App extends Component {
  render() {
    return (
      <div>
        <AdminLogin/>
      <Footer/>
      {/* <Validation/> */}
      {/* <Pagination/> */}
      {/* <ConfirmPass/> */}
      </div>
    )
  }
}

export default App

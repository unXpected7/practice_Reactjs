import React from "react";
import Input from "./input";
import Showerror from "./showErrors";

export default class ValiationForm extends React.Component {
  state = {
    nama: "",
    email: "",
    password: "",
    alamat: "",
    nomorhp: "",
    pekerjaan:"",
    errors: []
  };
  handleSubmit = event => {
    event.preventDefault();
    const{
        nama,
        email,
        password,
        alamat,
        nomorhp
    }= this.state

    let message = []

        if (nama.length === 0) {
        message = [...message,'nama tidak boleh kosong'];
        }
  
        if (email.length === 0) {
        message = [...message,'email tidak boleh kosong'];
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
        message = [...message,'email tidak valid'];
         }

        if (password.length < 8) {
        message = [...message,'Pasword harus lebih dari 8 huruf'];
        }

        if (password.length === 0) {
        message = [...message,'Pasword tidak boleh kosong'];
        }

        if (alamat.length === 0) {
        message = [...message,'alamat tidak boleh kosong'];
        }

        if (nomorhp.length === 0) {
        message = [...message,'nomor hp wajib diisi'];
        }
  
      
  
        if (message.length > 0){
          this.setState({
              errors : message
          }, ()=> console.log(this.state.errors))
        }
        else{
        alert(`
        Selamat Kamu telah terdaftar sebagai member dengan data sebagai berikut
        nama : ${this.state.nama}
        email : ${this.state.email}
        alamat : ${this.state.alamat}
        nomor hp : ${this.state.nomorhp}
        pekerjaan : ${this.state.pekerjaan}
        `)
        this.setState({
            errors:[]
        })
      }
    
  };

  render() {

    const style = {
        width: '400px',
        margin: '100px auto 0',
        border: '1px solid black',
        padding: '10px'
    }
    return (
        <div style={style}>
            {
                this.state.errors && <Showerror errors={this.state.errors}/>
            }
            <h1>Formulir Pendaftaran</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <Input
            name="nama"
            label="Nama"
            onChange={value => this.setState({nama: value})}
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            label="Email"
            onChange={value => this.setState({email: value})}
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            label="Password"
            onChange={value => this.setState({password: value})}
          />
        </div>
        <div>
          <Input
            name="alamat"
            label="Alamat"
            onChange={value => this.setState({alamat: value})}
          />
        </div>
        <div>
          <Input
            name="nomorhp"
            label="Nomor Hp"
            onChange={value => this.setState({nomorhp: value})}
          />
        </div>
        <div>
          <Input
            name="pekerjaan"
            label="Pekerjaan"
            onChange={value => this.setState({pekerjaan: value})}
          />
        </div>
        <button type="submit">Kirim</button>
      </form>
      </div>
    );
  }
}
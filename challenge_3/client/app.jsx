// import axios from "axios";




// State based App storing information
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: 0,
      phone: '',
      creditcard: 0,
      expiry: '',
      cvv: 0,
      billingzip: 0
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    if (this.state.currentPage === 0) {
      this.setState({ currentPage: 1 });
    }
    if (this.state.currentPage === 1) {
      let email = e.target.elements.email.value;
      let name = e.target.elements.name.value;
      let password = e.target.elements.password.value;


      axios.post('/form1', {
        name, email, password
      }).then((res) => {
        console.log(res);
      })

      this.setState({ name, password, email, currentPage: 2 })


    } else if (this.state.currentPage === 2) {

      let line1 = e.target.elements.line1.value;
      let line2 = e.target.elements.line2.value;
      let city = e.target.elements.city.value;
      let state = e.target.elements.state.value;
      let zipcode = e.target.elements.zipcode.value;
      let phone = e.target.elements.phone.value;

      axios.post('/form2', {
        line1, line2, city, state, zipcode, phone
      }).then((res) => {
        console.log(res);
      }).catch((res) => {
        console.log(res);
      })

      this.setState({ line1, line2, city, state, zipcode, phone, currentPage: 3 })

    } else if (this.state.currentPage === 3) {
      let creditcard = e.target.elements.creditcard.value;
      let expiry = e.target.elements.expiry.value;
      let cvv = e.target.elements.cvv.value;
      let billingzip = e.target.elements.billingzip.value;

      axios.post('/form3', {
        creditcard, expiry, cvv, billingzip
      }).then((res) => {
        console.log(res);
      }).catch((res) => {
        console.log(res);
      })

      this.setState({ creditcard, expiry, cvv, billingzip, currentPage: 4 })

    } else if (this.state.currentPage === 4) {
      this.setState({
        currentPage: 0,
        name: '',
        email: '',
        password: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zipcode: 0,
        phone: '',
        creditcard: 0,
        expiry: '',
        cvv: 0,
        billingzip: 0
      });
    }
  }


  render() {
    return (
      <div>
        <div >
          <Home onButtonClick={this.onButtonClick} currentPage={this.state.currentPage} />
        </div>
        <div>
          <F1 onButtonClick={this.onButtonClick} currentPage={this.state.currentPage} />
        </div>
        <div>
          <F2 onButtonClick={this.onButtonClick} currentPage={this.state.currentPage} />
        </div>
        <div>
          <F3 onButtonClick={this.onButtonClick} currentPage={this.state.currentPage} />
        </div>
        <div>
          <Summary state={this.state} onButtonClick={this.onButtonClick} currentPage={this.state.currentPage} />
        </div>
      </div>
    )
  }


}

// Home Page
var Home = (props) => {
  if (props.currentPage !== 0) {
    return null;
  }

  return (
    <div>

      <div id='Homepage'>
        Homepage
      </div>
      <br />
      <button onClick={(e) => props.onButtonClick(e)}>
        Checkout
      </button>
    </div>
  )
}

// First page of the Form
var F1 = (props) => {

  if (props.currentPage !== 1) {
    return null;
  }

  return (
    <div>

      <div>
        Please type in your name, email, and password for account creation
      </div>
      <br />
      <form onSubmit={(e) => props.onButtonClick(e)}>
        Name: <input type="text" name="name"></input> <br />
        Password: <input type="password" name="password"></input><br />
        Email: <input type="text" name="email"></input><br />
        <button type="submit">Next</button>
      </form>

    </div>
  )
}

// Second page of the Form
var F2 = (props) => {

  if (props.currentPage !== 2) {
    return null;
  }

  return (
    <div>

      <div>
        Please type in your address and phone number
    </div>
      <br />
      <form onSubmit={(e) => props.onButtonClick(e)}>
        Address <br />
      Line 1: <input type="text" name="line1"></input> <br />
      Line 2: <input type="text" name="line2"></input> <br />
      City: <input type="text" name="city"></input> <br />
      State: <input type="text" name="state"></input> <br />
      Zipcode: <input type="text" name="zipcode"></input> <br />
      Phone #: <input type="text" name="phone"></input><br />
        <button type="submit">Next</button>
      </form>

    </div>
  )
}

// Third page of the Form
var F3 = (props) => {

  if (props.currentPage !== 3) {
    return null;
  }

  return (
    <div>

      <div>
        Please type in your address and phone number
    </div>
      <br />
      <form onSubmit={(e) => props.onButtonClick(e)}>
        Credit Card Information <br />
      Credit Card #: <input type="text" name="creditcard"></input> <br />
      Expiry Date: <input type="text" name="expiry"></input> <br />
      CVV: <input type="text" name="cvv"></input> <br />
      Billing Zip Code: <input type="text" name="billingzip"></input> <br />
        <button type="submit" >Next</button>
      </form>

    </div>
  )
}

// Summary of stored information
var Summary = (props) => {

  if (props.currentPage !== 4) {
    return null;
  }

  return (
    <div>

      <div>
        Summary of information provided:
      </div>
      <div>name:{props.state.name}</div>
      <div>email: {props.state.email}</div>
      <div>password: {props.state.password}</div>
      <div>Address</div>
      <div>line1: {props.state.line1}</div>
      <div>line2: {props.state.line2}</div>
      <div>city: {props.state.city}</div>
      <div>state: {props.state.state}</div>
      <div>zipcode: {props.state.zipcode}</div>
      <div>creditcard: {props.state.creditcard}</div>
      <div>expiry: {props.state.expiry}</div>
      <div>billingzip: {props.state.billingzip}</div>
      <button onClick={() => props.onButtonClick()}>
        Purchase
      </button>
      <br />
    </div>
  )
}

// class F2 extends React.Component {

// }

// class F3 extends React.Component {

// }


// class Summary extends React.Component {

// }




ReactDOM.render(<App />, document.getElementById('app'));

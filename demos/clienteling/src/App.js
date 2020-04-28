import React from 'react';
import styles from './App.css';
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import natural from 'natural';
import nlp from 'compromise'
import { Avatar, Divider } from '@material-ui/core';

//images
import valtech_logo from './images/group.svg';
import employee_img from './images/employee.jpg';
import high_five from './images/success.png';
import customer_img from './images/customer-profile@3x.png'
import waveform from './images/waveform.png'
import preferences_icon from './images/image-2@3x.png'
import lifestyle_icon from './images/image-3@3x.png'
import hoodie_image from './images/item-3@3x.png'
import coffee_image from './images/item@3x.png'
import generic_image from './images/item-2@3x.png'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#651fff'),
    backgroundColor: '#304ffe',
    boxShadow: 24,
    fontFamily: 'Poppins',
    '&:hover': {
      backgroundColor: '#651fff',
    },
  },
}))(Button);


class EmployeeCard extends React.Component {
  render() {
    return (
      <Card variant="outlined" flex-direction='row'>
        <CardContent>
          <Grid container spacing={3} direction="row" alignItems='center'>
            <Grid item xs={6}>
              <img src={valtech_logo} alt="logo" style={{height:20, borderRadius:0}}/>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3} direction="row-reverse" alignItems="center">
                <h1 style={{marginLeft: 16, marginRight:16, color: "grey"}}>Associate Name</h1>
                <Avatar alt="Employee Name" src={employee_img}/>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

class OscilloscopeDiv extends React.Component {
  render() {
    return (
      <Grid container spacing={3} direction="row" alignItems="center">
        <Grid item xs={6}>
          <img src={high_five} alt="avatar"/>
        </Grid>
        <Grid item xs={6}>
          <img src={waveform} alt="waveform" style={{width:500}}/>
        </Grid>
      </Grid>   
      )
  }
}

class ProfileCard extends React.Component {
  render() {
    const classes = {};
    return (
      <Card variant="outlined">
        <CardContent>
        <Typography className={classes.title} gutterBottom style={{fontFamily: 'Poppins', fontSize: 24}}>
            Customer Profile
        </Typography>
        <Grid container spacing={3} direction="row">
            <Grid item xs={2}>
              <img src={customer_img} alt="client" style={{height:80, width:80}}/>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" component="h2" gutterBottom style={{color:'#304ffe', fontFamily:'Poppins'}}>
                { this.props.name }
              </Typography>
              <h1>Company : {this.props.company}</h1>
            </Grid>
        </Grid>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Confirm</ColorButton>
        </CardActions> */}
      </Card>
    )
  }
}

class PreferencesCard extends React.Component {
  render(){
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom style={{fontFamily: 'Poppins', fontSize: 24}}>
            Preferences
          </Typography>
          <Grid container spacing={3} direction="row">
            <Grid item xs={2}>
              <img src={preferences_icon} alt="client" style={{height:80, width:80}}/>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" component="p" style={{fontFamily: 'Poppins', fontSize: 24}}>
                { this.props.style }
              </Typography>
              <h1> Colour: { this.props.colour } </h1>
              <h1> Size: { this.props.size } </h1>
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Confirm</ColorButton>
        </CardActions> */}
      </Card>
    )
  }
}

class LifestyleCard extends React.Component {
  render(){ 
    const classes = {};
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
        <Typography className={classes.title} gutterBottom style={{fontFamily: 'Poppins', fontSize: 24}}>
          Lifestyle
        </Typography>
        <Grid container spacing={3} direction='row'>
          <Grid item xs={2}>
            <img src={lifestyle_icon} alt="client" style={{height:80, width:80}}/>
          </Grid>
          <Grid item xs={6}>
            <h1> Destination: { this.props.destination } </h1>
            <h1> Climate: { this.props.climate } </h1>
            <h1> Beverage: { this.props.beverage } </h1>
          </Grid>
        </Grid>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Confirm</ColorButton>
        </CardActions> */}
      </Card>
    )
  }
}

class CustomerCartCard extends React.Component {
  render(){
    const classes = {};
    return (
      <Card className={classes.root} variant="outlined" style={{height:"100%"}}>
        <CardContent>
          <Typography className={classes.title} gutterBottom style={{fontFamily: 'Poppins', fontSize: 24}}>
            Customer Cart
          </Typography>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h1 style={{color:"grey"}}> Items </h1>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row-reverse">
                <h1 style={{color:"grey"}}> Qty </h1>
              </Grid>
            </Grid>
          </Grid>
          <Divider light/>
   
          <Grid container spacing={3} direction="column">
            <Grid item>
              <ProductCards 
                products={this.props.products}
                removeItem = {this.props.removeItem} 
              />
            </Grid>
          </Grid>
        
        </CardContent>
        <CardActions>
          <Grid container direction="row-reverse">
            <ColorButton size="small" style={{padding: 20}}>Prepare Order</ColorButton>
          </Grid>
        </CardActions>
      </Card>
    )
  }
}

class ProductCards extends React.Component {
  render(){

    const classes = {};

    return (
      this.props.products.length > 0 && this.props.products.map((item, index) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <img src={item.imageName} style={{height:80, width:80}}/>
                </Grid>
                <Grid item> 
                  <h1>{item.productName}</h1>
                </Grid>
                <Grid item>
                  <h1 style={{color: "grey"}}>{item.productSize}</h1>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container direction="row-reverse">
                <ColorButton size="small" onClick={()=>this.props.removeItem(index)}>Remove</ColorButton>
              </Grid>
            </CardActions>
            <Divider light/>
          </Card>
        )
      })
    )
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      profileToggle: true,
      preferencesToggle: true,
      lifestyleToggle: true,
      cartToggle: true,
      name: "Name",
      position: " ",
      company: " ",
      size: " ",
      colour: " ",
      style: "Style",
      destination: " ",
      climate: " ",
      beverage: " ",
      product1: " ",
      product2: " ",
      product3: " ",
      products: []
    };
  }

  removeItem = function(index) {
    console.log("triggered the function")
    var prods = this.state.products
    let editedProds = prods.splice(index, 1)
    this.setState({
      products: prods
    })
  }

  printList = function(doc) {
    return JSON.stringify(doc.out('array'), null, 2)
  }

  componentDidMount() {

    var colourClassifier = new natural.BayesClassifier();
    colourClassifier.addDocument('default', 'default');
    colourClassifier.addDocument('grey', 'Grey');
    colourClassifier.addDocument('white', 'White');
    colourClassifier.addDocument('black', 'Black');
    colourClassifier.addDocument('purple', 'Purple');
    colourClassifier.addDocument('blue', 'Blue');
    colourClassifier.addDocument('yellow', 'Yellow');
    colourClassifier.addDocument('orange', 'Orange');
    colourClassifier.addDocument('red', 'Red');
    colourClassifier.addDocument('pink', 'Pink');
    colourClassifier.addDocument('dark', 'Dark');
    colourClassifier.addDocument('light', 'Light');
    colourClassifier.train();

    var sizeClassifier = new natural.BayesClassifier();
    sizeClassifier.addDocument('default', 'default');
    sizeClassifier.addDocument('small', 'Small');
    sizeClassifier.addDocument('medium', 'Medium');
    sizeClassifier.addDocument('large', 'Large');
    sizeClassifier.addDocument('extra large', 'Extra Large');
    sizeClassifier.train();

    var styleClassifier = new natural.BayesClassifier();
    styleClassifier.addDocument('default', 'default');
    styleClassifier.addDocument('hoodie', 'Hoodie');
    styleClassifier.addDocument('sweatshirt', 'Sweatshirt');
    styleClassifier.addDocument('long sleeve', 'Long Sleeve');
    styleClassifier.addDocument('short sleeve', 'Short Sleeve');
    styleClassifier.addDocument('t-shirt', 'T-Shirt');
    styleClassifier.train();

    var climateClassifier = new natural.BayesClassifier();
    climateClassifier.addDocument('default', 'default');
    climateClassifier.addDocument('hot', 'Hot')
    climateClassifier.addDocument('warm', 'Warm');
    climateClassifier.addDocument('cold', 'Cold');
    climateClassifier.addDocument('temperate', 'Temperate');
    climateClassifier.train();

    var beverageClassifier = new natural.BayesClassifier();
    beverageClassifier.addDocument('default', 'default');
    beverageClassifier.addDocument('water', 'Water');
    beverageClassifier.addDocument('coffee', 'Coffee');
    beverageClassifier.addDocument('coke', 'Coke');
    beverageClassifier.addDocument('pepsi', 'Pepsi');
    beverageClassifier.addDocument('beer', 'Beer');
    beverageClassifier.addDocument('sprite', 'Sprite');
    beverageClassifier.addDocument('mountain dew', 'Mountain dew');
    beverageClassifier.addDocument('wine', 'Wine');
    beverageClassifier.addDocument('pop', 'Pop');
    beverageClassifier.addDocument('soda', 'Soda');
    beverageClassifier.train();

    var cityClassifier = new natural.BayesClassifier();
    cityClassifier.addDocument('default', 'default');
    cityClassifier.addDocument('San Diego', 'San Diego');
    cityClassifier.addDocument('Honolulu', 'Honolulu');
    cityClassifier.train();

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onend = () => recognition.start()
  
    recognition.addEventListener('result', (e) => {
      let last = e.results.length - 1;
      let text = e.results[last][0].transcript;
      console.log('Confidence: ' + e.results[0][0].confidence);
      console.log('Text detected: ' + text);

      //listen for person's name
      let nameTest = nlp(text).people();
      let nameArray = nameTest.out('array')
      let nameItem = nameArray.map(function(e){
        return e;
      });
      if (nameItem.length >= 1 && nameItem != "Diego") {
        console.log("name item is: " + nameItem)
        this.setState({
          name: nameItem[0]
        })
      }
      
      //listen for company
      let companyTest = nlp(text).organizations()
      let companyArray = companyTest.out('array')
      let companyItem = companyArray.map(function(e){
        return e;
      });
      if (companyItem.length >= 1) {
        this.setState({
          company: companyItem
        })
      }

      //work for
      let afterCompany = nlp(text).after('work for')
      let afterCompanyArray = afterCompany.out('array')
      let afterCompanyItem = afterCompanyArray.map(function(e){
        return e;
      })
      if (afterCompanyItem.length >= 1) {
        this.setState({
          company: afterCompanyItem
        })
      }

      //work at
      let afterCompany2 = nlp(text).after('work at')
      let afterCompanyArray2 = afterCompany2.out('array')
      let afterCompanyItem2 = afterCompanyArray2.map(function(e){
        return e;
      })
      if (afterCompanyItem2.length >= 1) {
        this.setState({
          company: afterCompanyItem2
        })
      }

      //listen for colour
      let colour = colourClassifier.classify(text);
      if (colour !== 'default') {
        this.setState({
          colour: colour
        })
      }

      //listen for size
      let size = sizeClassifier.classify(text);
      if (size !== 'default') {
        this.setState({
          size: size
        })
      }

      //listen for style
      let style = styleClassifier.classify(text);
      if (style !== 'default') {
        this.setState({
          style: style
        })
      }

      if (style === 'Hoodie' && colour !== 'default' && colour !== 'White') {
        this.setState({
          products: this.state.products.concat([{ productName: "Valtech Hoodie - " + colour + " (Unavailable)", productSize: this.state.size, imageName: generic_image }])
        })
      }

      if (style === 'Hoodie' && colour === 'White') {
        this.setState({
          products: this.state.products.concat([{ productName: "Valtech Hoodie - " + colour, productSize: this.state.size, imageName: hoodie_image }])
        })
      }

      if (style === 'T-Shirt' && colour !== 'default') {
        this.setState({
          products: this.state.products.concat([{ productName: "Valtech T-Shirt - " + colour, productSize: this.state.size, imageName: generic_image }])
        })
      }

      //listen for destination
      let destinationTest = nlp(text).places();
      let destinationArray = destinationTest.out('array')
      let destinationItem = destinationArray.map(function(e){
        return e;
      });

      if (destinationItem.length >= 1) {
        this.setState({
          destination: destinationItem
        })
      }

       //listen for specific cities not detected by nlp above
       let city = cityClassifier.classify(text);
       if (city !== 'default') {
         this.setState({
           destination: city
         })
       }

      //listen for climate
      let climate = climateClassifier.classify(text);
      let beverage = beverageClassifier.classify(text);
      if (climate !== 'default' && beverage === 'default') {
        this.setState({
          climate: climate
        })
      }

      //listen for beverage
      if (beverage !== 'default') {
        this.setState({
          beverage: beverage
        })
      }

      if (beverage === 'Coffee') {
        this.setState({
          products: this.state.products.concat([{ productName: "Two Lines Coffee Tumbler", imageName: coffee_image }])
        })
      }

      if (beverage === 'Water') {
        this.setState({
          products: this.state.products.concat([{ productName: "Valtech Water Bottle", imageName: generic_image }])
        })
      }

    })
  }
  
  render() {
    return (
      <Container>
          <Grid>
            <EmployeeCard/>
          </Grid>
        <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12}>
            <OscilloscopeDiv/>
          </Grid>
          
          <Grid item xs={6}>
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <ProfileCard 
                name={this.state.name} 
                company={this.state.company}
                />
              </Grid>

              <Grid item xs={12}>
                <PreferencesCard 
                colour={this.state.colour}
                size={this.state.size}
                style={this.state.style}
                />
              </Grid>

              <Grid item xs={12}>
                <LifestyleCard
                destination={this.state.destination}
                climate={this.state.climate}
                beverage={this.state.beverage}
                />
              </Grid>

          </Grid>
        </Grid>

        <Grid item xs={6}>
            <Grid style={{height:"100%"}}>
              <CustomerCartCard
                products = {this.state.products}
                removeItem = {this.removeItem} 
              />
            </Grid>
        </Grid>
      </Grid>
      </Container>
    );
  }
}

export default App;



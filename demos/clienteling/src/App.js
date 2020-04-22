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
        <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Confirm</ColorButton>
        </CardActions>
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
        <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Confirm</ColorButton>
        </CardActions>
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
        <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Confirm</ColorButton>
        </CardActions>
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
          <Grid>
    
          </Grid>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <ProductCards products={this.props.products}/>
            </Grid>
          </Grid>
          
          {/* <Typography variant="h5" component="h2" gutterBottom>
            {this.props.product1}
          </Typography> */}
          <Divider light/>
          {/* <Typography variant="h5" component="h2" gutterBottom>
            {this.props.product2}
          </Typography> */}
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
      this.props.products.length > 0 && this.props.products.map((item) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <h1>{item.productName}</h1>
            </CardContent>
            <CardActions>
              <ColorButton size="small">Remove</ColorButton>
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

  printList = function(doc) {
    return JSON.stringify(doc.out('array'), null, 2)
  }


  componentWillMount() {

    var colourClassifier = new natural.BayesClassifier();
    colourClassifier.addDocument('default', 'default');
    colourClassifier.addDocument('grey', 'grey');
    colourClassifier.addDocument('white', 'white');
    colourClassifier.addDocument('black', 'black');
    colourClassifier.addDocument('purple', 'purple');
    colourClassifier.addDocument('blue', 'blue');
    colourClassifier.addDocument('yellow', 'yellow');
    colourClassifier.addDocument('orange', 'orange');
    colourClassifier.addDocument('red', 'red');
    colourClassifier.addDocument('pink', 'pink');
    colourClassifier.addDocument('dark', 'dark');
    colourClassifier.addDocument('light', 'light');
    colourClassifier.train();

    var sizeClassifier = new natural.BayesClassifier();
    sizeClassifier.addDocument('default', 'default');
    sizeClassifier.addDocument('small', 'small');
    sizeClassifier.addDocument('medium', 'medium');
    sizeClassifier.addDocument('large', 'large');
    sizeClassifier.addDocument('extra large', 'extra large');
    sizeClassifier.train();

    var styleClassifier = new natural.BayesClassifier();
    styleClassifier.addDocument('default', 'default');
    styleClassifier.addDocument('hoodie', 'hoodie');
    styleClassifier.addDocument('sweatshirt', 'sweatshirt');
    styleClassifier.addDocument('long sleeve', 'long sleeve');
    styleClassifier.addDocument('short sleeve', 'short sleeve');
    styleClassifier.addDocument('t-shirt', 't-shirt');
    styleClassifier.train();

    var climateClassifier = new natural.BayesClassifier();
    climateClassifier.addDocument('default', 'default');
    climateClassifier.addDocument('hot', 'hot')
    climateClassifier.addDocument('warm', 'warm');
    climateClassifier.addDocument('cold', 'cold');
    climateClassifier.addDocument('temperate', 'temperate');
    climateClassifier.train();

    var beverageClassifier = new natural.BayesClassifier();
    beverageClassifier.addDocument('default', 'default');
    beverageClassifier.addDocument('coffee', 'coffee');
    beverageClassifier.addDocument('coke', 'coke');
    beverageClassifier.addDocument('pepsi', 'pepsi');
    beverageClassifier.addDocument('beer', 'beer');
    beverageClassifier.addDocument('sprite', 'sprite');
    beverageClassifier.addDocument('mountain dew', 'mountain dew');
    beverageClassifier.addDocument('wine', 'wine');
    beverageClassifier.train();

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';
    recognition.start();
  
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
      if (nameItem.length >= 1) {
        this.setState({
          name: nameItem
        })
      }
      
      //listen for company
      let companyTest = nlp(text).organizations();
      let companyArray = companyTest.out('array')
      let companyItem = companyArray.map(function(e){
        return e;
      });
      if (companyItem.length >= 1) {
        this.setState({
          company: companyItem
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

      if (style === 'hoodie' && colour === 'black') {
        this.setState({
          // product2: "Valtech Hoodie - " + "black (Unavailable)", 
          products: this.state.products.concat([{ productName: "Valtech Hoodie - black (Unavailable)" }])
        })
      } else if (style === 'hoodie' && colour !== 'default') {
        this.setState({
          // product2: "Valtech Hoodie - " + colour 
          products: this.state.products.concat([{ productName: "Valtech Hoodie - " + colour }])
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

      //listen for climate
      let climate = climateClassifier.classify(text);
      if (climate !== 'default') {
        this.setState({
          climate: climate
        })
      }

      //listen for beverage
      let beverage = beverageClassifier.classify(text);
      if (beverage !== 'default') {
        this.setState({
          beverage: beverage
        })
      }

      if (beverage === 'coffee') {
        this.setState({
          // product1: "Two Lines Coffee Tumbler"
          products: this.state.products.concat([{ productName: "Two Lines Coffee Tumbler" }])
        })
      }

    })
  }
  
  render() {
    return (
      <Container>
          <Grid>
            <EmployeeCard name={this.state.name}/>
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
                // product1={this.state.product1}
                // product2={this.state.product2}
                products ={this.state.products}
              />
            </Grid>
        </Grid>
      </Grid>
      </Container>
    );
  }
}

export default App;



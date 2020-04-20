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
import { Avatar } from '@material-ui/core';

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

const LightButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#651fff'),
    backgroundColor: '#651fff',
    '&:hover': {
      backgroundColor: '#311b92',
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
              <img src="images/group.svg" alt="logo" style={{height:20, borderRadius:0}}/>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3} direction="row-reverse" alignItems="center">
                <h1 style={{marginLeft: 16, marginRight:16, color: "grey"}}>Associate Name</h1>
                <Avatar alt="Employee Name" src="/images/employee.jpg"/>
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
          <img src="/images/success.png" alt="avatar"/>
        </Grid>
        <Grid item xs={6}>
          <img src="/images/waveform.png" alt="waveform" style={{width:500}}/>
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
              <img src="/images/customer-profile@3x.png" alt="client" style={{height:80, width:80}}/>
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
              <img src="/images/image-2@3x.png" alt="client" style={{height:80, width:80}}/>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" component="p" style={{fontFamily: 'Poppins', fontSize: 24}}>
                { this.props.style }
              </Typography>
              <Typography variant="body2" component="h2" gutterBottom>
                Colour: { this.props.colour }
              </Typography>
              <Typography variant="body2" component="p">
                Size: { this.props.size }
              </Typography>
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
            {/* <Avatar alt="icon" src="/images/image-3@3x.png"/> */}
            <img src="/images/image-3@3x.png" alt="client" style={{height:80, width:80}}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Destination: {this.props.destination}
            </Typography>
            <Typography variant="body2" component="p">
              Climate: {this.props.climate}
            </Typography>
            <Typography variant="body2" component="p">
              Beverage: {this.props.beverage}
            </Typography>
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
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Customer Cart
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {this.props.product1}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {this.props.product2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Listen</Button>
          <ColorButton size="small">Checkout</ColorButton>
        </CardActions>
      </Card>
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
    };
  }

  trainClassifiers = function() {
    
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
      //console.log(this.printList(nameTest));
      let nameArray = nameTest.out('array')
      let nameItem = nameArray.map(function(e){
        return e;
      });
      //console.log(nameItem)
      if (nameItem.length >= 1) {
        this.setState({
          name: nameItem
        })
      }
      
      //listen for company
      let companyTest = nlp(text).organizations();
      //console.log(this.printList(companyTest));
      let companyArray = companyTest.out('array')
      let companyItem = companyArray.map(function(e){
        return e;
      });
      //console.log(companyItem)
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
          product2: "Valtech Hoodie - " + 'black (Unavailable)' 
        })
      } else if (style === 'hoodie' && colour !== 'default') {
        this.setState({
          product2: "Valtech Hoodie - " + colour 
        })
      }

      //listen for destination
      let destinationTest = nlp(text).places();
      //console.log(this.printList(destinationTest));
      let destinationArray = destinationTest.out('array')
      let destinationItem = destinationArray.map(function(e){
        return e;
      });
      //console.log(destinationItem)
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
          product1: "Two Lines Coffee Tumbler"
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
                product1={this.state.product1}
                product2={this.state.product2}
                product3={this.state.product3}
              />
            </Grid>
        </Grid>
      </Grid>
      </Container>
    );
  }
}

export default App;



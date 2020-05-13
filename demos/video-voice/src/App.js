import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from 'react-webcam'
import natural from 'natural'
import nlp from 'compromise'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Divider } from '@material-ui/core';

import chanel_image1 from './images/chanel1.jpeg';
import chanel_image2 from './images/chanel2.jpeg';
import chanel_image3 from './images/chanel3.jpeg';
import chanel_image4 from './images/chanel4.jpeg';
import chanel_image5 from './images/chanel5.jpeg';
import chanel_image6 from './images/chanel6.jpeg';


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

class CustomerCartCard extends React.Component {
  render(){
    const classes = {};
    return (
      <Grid container spacing={3} direction="row">
        <Grid item direction="row">
          <ProductCards products={this.props.products}/>
        </Grid>
      </Grid>
    )
  }
}

class ProductCards extends React.Component {
  render(){
    const classes = {};
    return (
      <div class='row'>
      {
      this.props.products.length > 0 && this.props.products.map((item) => {
        return (
          <div class='col-md-6'>
          <Card>
            <CardContent>
              <Grid container direction="row">
                <Grid item>
                  <img src={item.imageName} alt="client" style={{height:80, width:80}}/>
                </Grid>
                <Grid item>
                  <h2>{item.productName}</h2>
                </Grid>  
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container direction="row-reverse">
                <ColorButton size="small">Add to Cart</ColorButton>
              </Grid>
            </CardActions>
          </Card>
          </div>
        )
      })
      }
      </div> 
    )
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: '',
      colour: '',
      products: []
    };
  }

  printList = function(doc) {
    return JSON.stringify(doc.out('array'), null, 2)
  }


  componentWillMount() {

    var productClassifier = new natural.BayesClassifier();
    productClassifier.addDocument('default', 'default');
    productClassifier.addDocument('lipstick', 'lipstick');
    productClassifier.addDocument('perfume', 'perfume');
    productClassifier.addDocument('foundation', 'foundation');
    productClassifier.addDocument('tan', 'tan');
    productClassifier.addDocument('tanner', 'tanner');
    productClassifier.train();

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

      // //listen for person's name
      // let nameTest = nlp(text).people();
      // let nameArray = nameTest.out('array')
      // let nameItem = nameArray.map(function(e){
      //   return e;
      // });
      // if (nameItem.length >= 1) {
      //   this.setState({
      //     name: nameItem
      //   })
      // }
      
      // //listen for company
      // let companyTest = nlp(text).organizations();
      // let companyArray = companyTest.out('array')
      // let companyItem = companyArray.map(function(e){
      //   return e;
      // });
      // if (companyItem.length >= 1) {
      //   this.setState({
      //     company: companyItem
      //   })
      // }


      //listen for product
      let product = productClassifier.classify(text);
      console.log("product is: " + product)
      if (product !== 'default') {
        this.setState({
          product: product
        })
      }

      //listen for colour
      let colour = colourClassifier.classify(text);
      if (colour !== 'default') {
        this.setState({
          colour: colour
        })
      }

      if (product === 'lipstick' && colour === 'red') {
        this.setState({
          products: this.state.products.concat([{ productName: "Chanel Lipstick - Red", imageName: chanel_image3 }])
        })
      } 
      
      if (product === 'perfume') {
        this.setState({
          products: this.state.products.concat([{ productName: "Chanel No 5 ", imageName: chanel_image6}])
        })
      }

      if (product === 'tan' || product === 'tanner') {
        this.setState({
          products: this.state.products.concat([{ productName: "Soleil de Tan", imageName: chanel_image2}])
        })
      }

    })
  }

  render() {
    return (
      <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <CustomerCartCard
              products={this.state.products}
            />
          </Grid>
          <Grid item xs={6}>
            <Webcam height={720} width={1280}/>
          </Grid>
        </Grid>
      </Container>
      </div>
    );
  }
  
}

export default App;

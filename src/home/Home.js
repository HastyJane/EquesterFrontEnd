import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    
                    <h1 className="home-title">Welcome to Equester. </h1>
                   
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="jumbotron">
                                <h3>
                                    This is how it works
                                </h3>
                                <p>
                                    <ol>
                                        <li>You register your horse (or donkey, mule, zebra: whatever you're into) with Equester</li>
                                        <li>Upload a few pictures and fill out some basic information</li>
                                        <li>Start logging events on your horses timeline. Log shoeings and rep your favorite farrier or log a trail ride and tag your friends.</li>
                                        <li>Build a record overtime of your equines' activities, care and experiences.</li>
                                        <li>This will add to the value of your horse if you plan to sell one day and also act as thorough set of records for your own use.</li>
                                    </ol>
                                </p>
                                <p>
                                    <button class="btn btn-primary btn-large" href="#">Login</button>
                                    <button class="btn btn-primary btn-large" href="#">Sign Up</button>
                                    <button class="btn btn-primary btn-large" href="#">Register an Equine</button>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		
		<Route name="courses" handler={require('./components/courses/coursePage')} />
		<Route name="addCourse" path="course" handler={require('./components/courses/manageCoursePage')} />
		<Route name="manageCourse" path="course/:id" handler={require('./components/courses/manageCoursePage')} />

		<Route name="authors" handler={require('./components/authors/authorPage')} />
		<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
		<Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />

		<NotFoundRoute handler={require('./components/404')} />
		<Route name="about" path="about" handler={require('./components/about/aboutPage')} />
		<Redirect from="about-us" to="about" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;
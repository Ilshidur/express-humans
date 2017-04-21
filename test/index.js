var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;
var supertest = require('supertest');
var humans = require('../');

var route = '/humans.txt';

describe('express-humans :', function() {
  it('should output empty string if no config', function(done) {
    supertest(humans())
      .get(route)
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
        expect(res.text).to.equal('');
        done();
      });
  });

  it('should work with an input file', function(done) {
    supertest(humans(path.join(__dirname, 'fixtures/humans.txt')))
      .get(route)
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
        expect(res.text).to.equal('/* TEAM */\n\nChef: Ilshidur\n\n/* THANKS */\n\nName: NPM\n\n/* SITE */\n\nLast update: never');
        done();
      });
  });


    describe('should work with an input config :', function() {

      it('team - string', function(done) {
        supertest(humans({
          team: 'test'
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* TEAM */\n\ntest');
            done();
          });
      });
      it('team - array', function(done) {
        supertest(humans({
          team: [
            'test'
          ]
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* TEAM */\n\ntest');
            done();
          });
      });
      it('thanks - string', function(done) {
        supertest(humans({
          thanks: 'test'
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* THANKS */\n\ntest');
            done();
          });
      });
      it('thanks - array', function(done) {
        supertest(humans({
          thanks: [
            'test'
          ]
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* THANKS */\n\ntest');
            done();
          });
      });
      it('site - string', function(done) {
        supertest(humans({
          site: 'test'
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* SITE */\n\ntest');
            done();
          });
      });
      it('site - array', function(done) {
        supertest(humans({
          site: [
            'test'
          ]
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* SITE */\n\ntest');
            done();
          });
      });
      it('all params', function(done) {
        supertest(humans({
          team: [
            'test'
          ],
          thanks: [
            'test'
          ],
          site: [
            'test'
          ]
        }))
          .get(route)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
            expect(res.text).to.equal('/* TEAM */\n\ntest/* THANKS */\n\ntest/* SITE */\n\ntest');
            done();
          });
      });

    });
});

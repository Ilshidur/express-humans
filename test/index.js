const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const supertest = require('supertest');
const figlet = require('figlet');
const humans = require('..');

const route = '/humans.txt';
const header = figlet.textSync('Humans.txt') + '\n\n';

describe('express-humans :', function() {
  it('should output empty string if no config', function(done) {
    supertest(humans())
      .get(route)
      .end(function(err, res) {
        expect(res.status).to.equal(404);
        expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
        expect(res.text).to.equal('404 : Not Found');
        done();
      });
  });

  it('should work with an input file', function(done) {
    supertest(humans(path.join(__dirname, 'fixtures/humans.txt')))
      .get(route)
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        expect(res.headers['content-type']).to.equal('text/plain; charset=utf-8');
        expect(res.text).to.equal('/* TEAM */\n\nChef: Ilshidur\n\n\n/* THANKS */\n\nName: NPM\n\n\n/* SITE */\n\nLast update: never\n');
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
          expect(res.text).to.equal(header + '/* TEAM */\ntest\n');
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
          expect(res.text).to.equal(header + '/* TEAM */\ntest\n');
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
          expect(res.text).to.equal(header + '/* THANKS */\ntest\n');
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
          expect(res.text).to.equal(header + '/* THANKS */\ntest\n');
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
          expect(res.text).to.equal(header + '/* SITE */\ntest\n');
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
          expect(res.text).to.equal(header + '/* SITE */\ntest\n');
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
          expect(res.text).to.equal(header + '/* TEAM */\ntest\n\n/* THANKS */\ntest\n\n/* SITE */\ntest\n');
          done();
        });
    });

  });

  it('should throw an error if the path is incorrect', function(done) {
    supertest(humans(path.join(__dirname, 'fixtures/humans.txtINCORRECT')))
      .get(route)
      .end(function(err, res) {
        expect(res.status).to.equal(500);
        expect(res.text).to.equal('500 : No humans.txt found !');
        done();
      });
  });
});

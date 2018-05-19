'use strict';
const fs = require('fs');
fs.__real_appendFile = fs.appendFile;
fs.appendFile = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_appendFile(...args);
}
fs.__real_chmod = fs.chmod;
fs.chmod = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_chmod(...args);
}
fs.__real_chown = fs.chown;
fs.chown = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_chown(...args);
}
fs.__real_close = fs.close;
fs.close = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_close(...args);
}
fs.__real_fchmod = fs.fchmod;
fs.fchmod = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_fchmod(...args);
}
fs.__real_fchown = fs.fchown;
fs.fchown = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_fchown(...args);
}
fs.__real_fdatasync = fs.fdatasync;
fs.fdatasync = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_fdatasync(...args);
}
fs.__real_fstat = fs.fstat;
fs.fstat = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_fstat(...args);
}
fs.__real_fsync = fs.fsync;
fs.fsync = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_fsync(...args);
}
fs.__real_ftruncate = fs.ftruncate;
fs.ftruncate = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_ftruncate(...args);
}
fs.__real_futimes = fs.futimes;
fs.futimes = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_futimes(...args);
}
fs.__real_lchmod = fs.lchmod;
fs.lchmod = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_lchmod(...args);
}
fs.__real_lchown = fs.lchown;
fs.lchown = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_lchown(...args);
}
fs.__real_link = fs.link;
fs.link = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_link(...args);
}
fs.__real_lstat = fs.lstat;
fs.lstat = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_lstat(...args);
}
fs.__real_mkdir = fs.mkdir;
fs.mkdir = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_mkdir(...args);
}
fs.__real_mkdtemp = fs.mkdtemp;
fs.mkdtemp = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_mkdtemp(...args);
}
fs.__real_readFile = fs.readFile;
fs.readFile = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_readFile(...args);
}
fs.__real_readdir = fs.readdir;
fs.readdir = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_readdir(...args);
}
fs.__real_readlink = fs.readlink;
fs.readlink = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_readlink(...args);
}
fs.__real_realpath = fs.realpath;
fs.realpath = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_realpath(...args);
}
fs.__real_rename = fs.rename;
fs.rename = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_rename(...args);
}
fs.__real_rmdir = fs.rmdir;
fs.rmdir = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_rmdir(...args);
}
fs.__real_stat = fs.stat;
fs.stat = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_stat(...args);
}
fs.__real_truncate = fs.truncate;
fs.truncate = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_truncate(...args);
}
fs.__real_unlink = fs.unlink;
fs.unlink = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_unlink(...args);
}
fs.__real_utimes = fs.utimes;
fs.utimes = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_utimes(...args);
}
fs.__real_write = fs.write;
fs.write = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_write(...args);
}
fs.__real_writeFile = fs.writeFile;
fs.writeFile = function(...args) {
  if (typeof args[args.length-1] != 'function')
    args.push(() => {});
  this.__real_writeFile(...args);
}

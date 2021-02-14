
/* gl-matrix-min.js */
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.3.0

Copyright (c) 2015-2020, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).glMatrix={})}(this,(function(t){"use strict";var n="undefined"!=typeof Float32Array?Float32Array:Array,a=Math.random;var r=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var e=Object.freeze({__proto__:null,EPSILON:1e-6,get ARRAY_TYPE(){return n},RANDOM:a,setMatrixArrayType:function(t){n=t},toRadian:function(t){return t*r},equals:function(t,n){return Math.abs(t-n)<=1e-6*Math.max(1,Math.abs(t),Math.abs(n))}});function u(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+u*h,t[1]=e*i+o*h,t[2]=r*c+u*s,t[3]=e*c+o*s,t}function o(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}var i=u,h=o,c=Object.freeze({__proto__:null,create:function(){var t=new n(4);return n!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},fromValues:function(t,a,r,e){var u=new n(4);return u[0]=t,u[1]=a,u[2]=r,u[3]=e,u},set:function(t,n,a,r,e){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t},transpose:function(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a*u-e*r;return o?(o=1/o,t[0]=u*o,t[1]=-r*o,t[2]=-e*o,t[3]=a*o,t):null},adjoint:function(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:u,rotate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=e*h+o*i,t[2]=r*-i+u*h,t[3]=e*-i+o*h,t},scale:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=e*i,t[2]=u*h,t[3]=o*h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},str:function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3])},LDU:function(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t},subtract:o,exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=1e-6*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=1e-6*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(e-h)<=1e-6*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(u-c)<=1e-6*Math.max(1,Math.abs(u),Math.abs(c))},multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},mul:i,sub:h});function s(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+u*s,t[1]=e*c+o*s,t[2]=r*M+u*f,t[3]=e*M+o*f,t[4]=r*l+u*v+i,t[5]=e*l+o*v+h,t}function M(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}var f=s,l=M,v=Object.freeze({__proto__:null,create:function(){var t=new n(6);return n!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},clone:function(t){var a=new n(6);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},fromValues:function(t,a,r,e,u,o){var i=new n(6);return i[0]=t,i[1]=a,i[2]=r,i[3]=e,i[4]=u,i[5]=o,i},set:function(t,n,a,r,e,u,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=a*u-r*e;return h?(h=1/h,t[0]=u*h,t[1]=-r*h,t[2]=-e*h,t[3]=a*h,t[4]=(e*i-u*o)*h,t[5]=(r*o-a*i)*h,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:s,rotate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+u*c,t[1]=e*s+o*c,t[2]=r*-c+u*s,t[3]=e*-c+o*s,t[4]=i,t[5]=h,t},scale:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=e*c,t[2]=u*s,t[3]=o*s,t[4]=i,t[5]=h,t},translate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=r*c+u*s+i,t[5]=e*c+o*s+h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t},subtract:M,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],M=n[3],f=n[4],l=n[5];return Math.abs(a-h)<=1e-6*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=1e-6*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(e-s)<=1e-6*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-M)<=1e-6*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-f)<=1e-6*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-l)<=1e-6*Math.max(1,Math.abs(i),Math.abs(l))},mul:f,sub:l});function b(){var t=new n(9);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function m(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],p=a[6],x=a[7],y=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*e+l*i+v*s,t[2]=f*u+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*e+m*i+d*s,t[5]=b*u+m*h+d*M,t[6]=p*r+x*o+y*c,t[7]=p*e+x*i+y*s,t[8]=p*u+x*h+y*M,t}function d(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}var p=m,x=d,y=Object.freeze({__proto__:null,create:b,fromMat4:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},clone:function(t){var a=new n(9);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromValues:function(t,a,r,e,u,o,i,h,c){var s=new n(9);return s[0]=t,s[1]=a,s[2]=r,s[3]=e,s[4]=u,s[5]=o,s[6]=i,s[7]=h,s[8]=c,s},set:function(t,n,a,r,e,u,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,n){if(t===n){var a=n[1],r=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*u+i*h,l=c*u-o*h,v=a*M+r*f+e*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+e*c)*v,t[2]=(i*r-e*o)*v,t[3]=f*v,t[4]=(s*a-e*h)*v,t[5]=(-i*a+e*u)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*u)*v,t):null},adjoint:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=e*c-r*s,t[2]=r*i-e*o,t[3]=i*h-u*s,t[4]=a*s-e*h,t[5]=e*u-a*i,t[6]=u*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*u,t},determinant:function(t){var n=t[0],a=t[1],r=t[2],e=t[3],u=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*u-o*h)+a*(-c*e+o*i)+r*(h*e-u*i)},multiply:m,translate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*e+l*i+s,t[8]=f*u+l*h+M,t},rotate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*e+f*i,t[2]=l*u+f*h,t[3]=l*o-f*r,t[4]=l*i-f*e,t[5]=l*h-f*u,t[6]=c,t[7]=s,t[8]=M,t},scale:function(t,n,a){var r=a[0],e=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a+a,i=r+r,h=e+e,c=a*o,s=r*o,M=r*i,f=e*o,l=e*i,v=e*h,b=u*o,m=u*i,d=u*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t},normalFromMat4:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-e*o,y=a*c-u*o,q=r*h-e*i,g=r*c-u*i,_=e*c-u*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,j=M*d-l*b,P=f*d-l*m,S=p*P-x*j+y*z+q*R-g*w+_*A;return S?(S=1/S,t[0]=(i*P-h*j+c*z)*S,t[1]=(h*R-o*P-c*w)*S,t[2]=(o*j-i*R+c*A)*S,t[3]=(e*j-r*P-u*z)*S,t[4]=(a*P-e*R+u*w)*S,t[5]=(r*R-a*j-u*A)*S,t[6]=(b*_-m*g+d*q)*S,t[7]=(m*y-v*_-d*x)*S,t[8]=(v*g-b*y+d*p)*S,t):null},projection:function(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t},subtract:d,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],M=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],p=n[7],x=n[8];return Math.abs(a-M)<=1e-6*Math.max(1,Math.abs(a),Math.abs(M))&&Math.abs(r-f)<=1e-6*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(e-l)<=1e-6*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(u-v)<=1e-6*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(o-b)<=1e-6*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=1e-6*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=1e-6*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-p)<=1e-6*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(s-x)<=1e-6*Math.max(1,Math.abs(s),Math.abs(x))},mul:p,sub:x});function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function g(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],p=n[15],x=a[0],y=a[1],q=a[2],g=a[3];return t[0]=x*r+y*i+q*M+g*b,t[1]=x*e+y*h+q*f+g*m,t[2]=x*u+y*c+q*l+g*d,t[3]=x*o+y*s+q*v+g*p,x=a[4],y=a[5],q=a[6],g=a[7],t[4]=x*r+y*i+q*M+g*b,t[5]=x*e+y*h+q*f+g*m,t[6]=x*u+y*c+q*l+g*d,t[7]=x*o+y*s+q*v+g*p,x=a[8],y=a[9],q=a[10],g=a[11],t[8]=x*r+y*i+q*M+g*b,t[9]=x*e+y*h+q*f+g*m,t[10]=x*u+y*c+q*l+g*d,t[11]=x*o+y*s+q*v+g*p,x=a[12],y=a[13],q=a[14],g=a[15],t[12]=x*r+y*i+q*M+g*b,t[13]=x*e+y*h+q*f+g*m,t[14]=x*u+y*c+q*l+g*d,t[15]=x*o+y*s+q*v+g*p,t}function _(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=r+r,h=e+e,c=u+u,s=r*i,M=r*h,f=r*c,l=e*h,v=e*c,b=u*c,m=o*i,d=o*h,p=o*c;return t[0]=1-(l+b),t[1]=M+p,t[2]=f-d,t[3]=0,t[4]=M-p,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function A(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function w(t,n){var a=n[0],r=n[1],e=n[2],u=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,e),t[1]=Math.hypot(u,o,i),t[2]=Math.hypot(h,c,s),t}function R(t,a){var r=new n(3);w(r,a);var e=1/r[0],u=1/r[1],o=1/r[2],i=a[0]*e,h=a[1]*u,c=a[2]*o,s=a[4]*e,M=a[5]*u,f=a[6]*o,l=a[8]*e,v=a[9]*u,b=a[10]*o,m=i+M+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(f-v)/d,t[1]=(l-c)/d,t[2]=(h-s)/d):i>M&&i>b?(d=2*Math.sqrt(1+i-M-b),t[3]=(f-v)/d,t[0]=.25*d,t[1]=(h+s)/d,t[2]=(l+c)/d):M>b?(d=2*Math.sqrt(1+M-i-b),t[3]=(l-c)/d,t[0]=(h+s)/d,t[1]=.25*d,t[2]=(f+v)/d):(d=2*Math.sqrt(1+b-i-M),t[3]=(h-s)/d,t[0]=(l+c)/d,t[1]=(f+v)/d,t[2]=.25*d),t}function z(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}var j=g,P=z,S=Object.freeze({__proto__:null,create:function(){var t=new n(16);return n!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},clone:function(t){var a=new n(16);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},fromValues:function(t,a,r,e,u,o,i,h,c,s,M,f,l,v,b,m){var d=new n(16);return d[0]=t,d[1]=a,d[2]=r,d[3]=e,d[4]=u,d[5]=o,d[6]=i,d[7]=h,d[8]=c,d[9]=s,d[10]=M,d[11]=f,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d},set:function(t,n,a,r,e,u,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t},identity:q,transpose:function(t,n){if(t===n){var a=n[1],r=n[2],e=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=u,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-e*o,y=a*c-u*o,q=r*h-e*i,g=r*c-u*i,_=e*c-u*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,j=M*d-l*b,P=f*d-l*m,S=p*P-x*j+y*z+q*R-g*w+_*A;return S?(S=1/S,t[0]=(i*P-h*j+c*z)*S,t[1]=(e*j-r*P-u*z)*S,t[2]=(b*_-m*g+d*q)*S,t[3]=(f*g-M*_-l*q)*S,t[4]=(h*R-o*P-c*w)*S,t[5]=(a*P-e*R+u*w)*S,t[6]=(m*y-v*_-d*x)*S,t[7]=(s*_-f*y+l*x)*S,t[8]=(o*j-i*R+c*A)*S,t[9]=(r*R-a*j-u*A)*S,t[10]=(v*g-b*y+d*p)*S,t[11]=(M*y-s*g-l*p)*S,t[12]=(i*w-o*z-h*A)*S,t[13]=(a*z-r*w+e*A)*S,t[14]=(b*x-v*q-m*p)*S,t[15]=(s*q-M*x+f*p)*S,t):null},adjoint:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(e*d-u*m)+b*(e*l-u*f)),t[2]=r*(h*d-c*m)-i*(e*d-u*m)+b*(e*c-u*h),t[3]=-(r*(h*l-c*f)-i*(e*l-u*f)+M*(e*c-u*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(e*d-u*m)+v*(e*l-u*f),t[6]=-(a*(h*d-c*m)-o*(e*d-u*m)+v*(e*c-u*h)),t[7]=a*(h*l-c*f)-o*(e*l-u*f)+s*(e*c-u*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-u*b)+v*(r*l-u*M)),t[10]=a*(i*d-c*b)-o*(r*d-u*b)+v*(r*c-u*i),t[11]=-(a*(i*l-c*M)-o*(r*l-u*M)+s*(r*c-u*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-e*b)+v*(r*f-e*M),t[14]=-(a*(i*m-h*b)-o*(r*m-e*b)+v*(r*h-e*i)),t[15]=a*(i*f-h*M)-o*(r*f-e*M)+s*(r*h-e*i),t},determinant:function(t){var n=t[0],a=t[1],r=t[2],e=t[3],u=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*u)*(M*m-f*b)-(n*i-r*u)*(s*m-f*v)+(n*h-e*u)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-e*o)*(c*b-M*l)+(r*h-e*i)*(c*v-s*l)},multiply:g,translate:function(t,n,a){var r,e,u,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],e=n[1],u=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=e*b+h*m+f*d+n[13],t[14]=u*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t},scale:function(t,n,a){var r=a[0],e=a[1],u=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},rotate:function(t,n,a,r){var e,u,o,i,h,c,s,M,f,l,v,b,m,d,p,x,y,q,g,_,A,w,R,z,j=r[0],P=r[1],S=r[2],E=Math.hypot(j,P,S);return E<1e-6?null:(j*=E=1/E,P*=E,S*=E,e=Math.sin(a),o=1-(u=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],M=n[4],f=n[5],l=n[6],v=n[7],b=n[8],m=n[9],d=n[10],p=n[11],x=j*j*o+u,y=P*j*o+S*e,q=S*j*o-P*e,g=j*P*o-S*e,_=P*P*o+u,A=S*P*o+j*e,w=j*S*o+P*e,R=P*S*o-j*e,z=S*S*o+u,t[0]=i*x+M*y+b*q,t[1]=h*x+f*y+m*q,t[2]=c*x+l*y+d*q,t[3]=s*x+v*y+p*q,t[4]=i*g+M*_+b*A,t[5]=h*g+f*_+m*A,t[6]=c*g+l*_+d*A,t[7]=s*g+v*_+p*A,t[8]=i*w+M*R+b*z,t[9]=h*w+f*R+m*z,t[10]=c*w+l*R+d*z,t[11]=s*w+v*R+p*z,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)},rotateX:function(t,n,a){var r=Math.sin(a),e=Math.cos(a),u=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=u*e+c*r,t[5]=o*e+s*r,t[6]=i*e+M*r,t[7]=h*e+f*r,t[8]=c*e-u*r,t[9]=s*e-o*r,t[10]=M*e-i*r,t[11]=f*e-h*r,t},rotateY:function(t,n,a){var r=Math.sin(a),e=Math.cos(a),u=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e-c*r,t[1]=o*e-s*r,t[2]=i*e-M*r,t[3]=h*e-f*r,t[8]=u*r+c*e,t[9]=o*r+s*e,t[10]=i*r+M*e,t[11]=h*r+f*e,t},rotateZ:function(t,n,a){var r=Math.sin(a),e=Math.cos(a),u=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=u*e+c*r,t[1]=o*e+s*r,t[2]=i*e+M*r,t[3]=h*e+f*r,t[4]=c*e-u*r,t[5]=s*e-o*r,t[6]=M*e-i*r,t[7]=f*e-h*r,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,n,a){var r,e,u,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<1e-6?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),u=1-(e=Math.cos(n)),t[0]=o*o*u+e,t[1]=i*o*u+h*r,t[2]=h*o*u-i*r,t[3]=0,t[4]=o*i*u-h*r,t[5]=i*i*u+e,t[6]=h*i*u+o*r,t[7]=0,t[8]=o*h*u+i*r,t[9]=i*h*u-o*r,t[10]=h*h*u+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromYRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:_,fromQuat2:function(t,a){var r=new n(3),e=-a[0],u=-a[1],o=-a[2],i=a[3],h=a[4],c=a[5],s=a[6],M=a[7],f=e*e+u*u+o*o+i*i;return f>0?(r[0]=2*(h*i+M*e+c*o-s*u)/f,r[1]=2*(c*i+M*u+s*e-h*o)/f,r[2]=2*(s*i+M*o+h*u-c*e)/f):(r[0]=2*(h*i+M*e+c*o-s*u),r[1]=2*(c*i+M*u+s*e-h*o),r[2]=2*(s*i+M*o+h*u-c*e)),_(t,a,r),t},getTranslation:A,getScaling:w,getRotation:R,fromRotationTranslationScale:function(t,n,a,r){var e=n[0],u=n[1],o=n[2],i=n[3],h=e+e,c=u+u,s=o+o,M=e*h,f=e*c,l=e*s,v=u*c,b=u*s,m=o*s,d=i*h,p=i*c,x=i*s,y=r[0],q=r[1],g=r[2];return t[0]=(1-(v+m))*y,t[1]=(f+x)*y,t[2]=(l-p)*y,t[3]=0,t[4]=(f-x)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+p)*g,t[9]=(b-d)*g,t[10]=(1-(M+v))*g,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,n,a,r,e){var u=n[0],o=n[1],i=n[2],h=n[3],c=u+u,s=o+o,M=i+i,f=u*c,l=u*s,v=u*M,b=o*s,m=o*M,d=i*M,p=h*c,x=h*s,y=h*M,q=r[0],g=r[1],_=r[2],A=e[0],w=e[1],R=e[2],z=(1-(b+d))*q,j=(l+y)*q,P=(v-x)*q,S=(l-y)*g,E=(1-(f+d))*g,O=(m+p)*g,T=(v+x)*_,D=(m-p)*_,F=(1-(f+b))*_;return t[0]=z,t[1]=j,t[2]=P,t[3]=0,t[4]=S,t[5]=E,t[6]=O,t[7]=0,t[8]=T,t[9]=D,t[10]=F,t[11]=0,t[12]=a[0]+A-(z*A+S*w+T*R),t[13]=a[1]+w-(j*A+E*w+D*R),t[14]=a[2]+R-(P*A+O*w+F*R),t[15]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a+a,i=r+r,h=e+e,c=a*o,s=r*o,M=r*i,f=e*o,l=e*i,v=e*h,b=u*o,m=u*i,d=u*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,n,a,r,e,u,o){var i=1/(a-n),h=1/(e-r),c=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(e+r)*h,t[10]=(o+u)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*c,t[15]=0,t},perspective:function(t,n,a,r,e){var u,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(u=1/(r-e),t[10]=(e+r)*u,t[14]=2*e*r*u):(t[10]=-1,t[14]=-2*r),t},perspectiveFromFieldOfView:function(t,n,a,r){var e=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(e+u);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(e-u)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t},ortho:function(t,n,a,r,e,u,o){var i=1/(n-a),h=1/(r-e),c=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(e+r)*h,t[14]=(o+u)*c,t[15]=1,t},lookAt:function(t,n,a,r){var e,u,o,i,h,c,s,M,f,l,v=n[0],b=n[1],m=n[2],d=r[0],p=r[1],x=r[2],y=a[0],g=a[1],_=a[2];return Math.abs(v-y)<1e-6&&Math.abs(b-g)<1e-6&&Math.abs(m-_)<1e-6?q(t):(s=v-y,M=b-g,f=m-_,e=p*(f*=l=1/Math.hypot(s,M,f))-x*(M*=l),u=x*(s*=l)-d*f,o=d*M-p*s,(l=Math.hypot(e,u,o))?(e*=l=1/l,u*=l,o*=l):(e=0,u=0,o=0),i=M*o-f*u,h=f*e-s*o,c=s*u-M*e,(l=Math.hypot(i,h,c))?(i*=l=1/l,h*=l,c*=l):(i=0,h=0,c=0),t[0]=e,t[1]=i,t[2]=s,t[3]=0,t[4]=u,t[5]=h,t[6]=M,t[7]=0,t[8]=o,t[9]=c,t[10]=f,t[11]=0,t[12]=-(e*v+u*b+o*m),t[13]=-(i*v+h*b+c*m),t[14]=-(s*v+M*b+f*m),t[15]=1,t)},targetTo:function(t,n,a,r){var e=n[0],u=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=e-a[0],M=u-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=e,t[13]=u,t[14]=o,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t},subtract:z,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],M=t[9],f=t[10],l=t[11],v=t[12],b=t[13],m=t[14],d=t[15],p=n[0],x=n[1],y=n[2],q=n[3],g=n[4],_=n[5],A=n[6],w=n[7],R=n[8],z=n[9],j=n[10],P=n[11],S=n[12],E=n[13],O=n[14],T=n[15];return Math.abs(a-p)<=1e-6*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(r-x)<=1e-6*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(e-y)<=1e-6*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(u-q)<=1e-6*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(o-g)<=1e-6*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-_)<=1e-6*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(h-A)<=1e-6*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(c-w)<=1e-6*Math.max(1,Math.abs(c),Math.abs(w))&&Math.abs(s-R)<=1e-6*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(M-z)<=1e-6*Math.max(1,Math.abs(M),Math.abs(z))&&Math.abs(f-j)<=1e-6*Math.max(1,Math.abs(f),Math.abs(j))&&Math.abs(l-P)<=1e-6*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(v-S)<=1e-6*Math.max(1,Math.abs(v),Math.abs(S))&&Math.abs(b-E)<=1e-6*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(m-O)<=1e-6*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(d-T)<=1e-6*Math.max(1,Math.abs(d),Math.abs(T))},mul:j,sub:P});function E(){var t=new n(3);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function O(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function T(t,a,r){var e=new n(3);return e[0]=t,e[1]=a,e[2]=r,e}function D(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function F(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function I(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function L(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2];return Math.hypot(a,r,e)}function V(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2];return a*a+r*r+e*e}function Q(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function Y(t,n){var a=n[0],r=n[1],e=n[2],u=a*a+r*r+e*e;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u,t}function X(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Z(t,n,a){var r=n[0],e=n[1],u=n[2],o=a[0],i=a[1],h=a[2];return t[0]=e*h-u*i,t[1]=u*o-r*h,t[2]=r*i-e*o,t}var B,N=D,k=F,U=I,W=L,C=V,G=O,H=Q,J=(B=E(),function(t,n,a,r,e,u){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)B[0]=t[o],B[1]=t[o+1],B[2]=t[o+2],e(B,B,u),t[o]=B[0],t[o+1]=B[1],t[o+2]=B[2];return t}),K=Object.freeze({__proto__:null,create:E,clone:function(t){var a=new n(3);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a},length:O,fromValues:T,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},set:function(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t},subtract:D,multiply:F,divide:I,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t},distance:L,squaredDistance:V,squaredLength:Q,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:Y,dot:X,cross:Z,lerp:function(t,n,a,r){var e=n[0],u=n[1],o=n[2];return t[0]=e+r*(a[0]-e),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t},hermite:function(t,n,a,r,e,u){var o=u*u,i=o*(2*u-3)+1,h=o*(u-2)+u,c=o*(u-1),s=o*(3-2*u);return t[0]=n[0]*i+a[0]*h+r[0]*c+e[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+e[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+e[2]*s,t},bezier:function(t,n,a,r,e,u){var o=1-u,i=o*o,h=u*u,c=i*o,s=3*u*i,M=3*h*o,f=h*u;return t[0]=n[0]*c+a[0]*s+r[0]*M+e[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+e[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+e[2]*f,t},random:function(t,n){n=n||1;var r=2*a()*Math.PI,e=2*a()-1,u=Math.sqrt(1-e*e)*n;return t[0]=Math.cos(r)*u,t[1]=Math.sin(r)*u,t[2]=e*n,t},transformMat4:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=a[3]*r+a[7]*e+a[11]*u+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*e+a[8]*u+a[12])/o,t[1]=(a[1]*r+a[5]*e+a[9]*u+a[13])/o,t[2]=(a[2]*r+a[6]*e+a[10]*u+a[14])/o,t},transformMat3:function(t,n,a){var r=n[0],e=n[1],u=n[2];return t[0]=r*a[0]+e*a[3]+u*a[6],t[1]=r*a[1]+e*a[4]+u*a[7],t[2]=r*a[2]+e*a[5]+u*a[8],t},transformQuat:function(t,n,a){var r=a[0],e=a[1],u=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=e*c-u*h,M=u*i-r*c,f=r*h-e*i,l=e*f-u*M,v=u*s-r*f,b=r*M-e*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t},rotateX:function(t,n,a,r){var e=[],u=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],u[0]=e[0],u[1]=e[1]*Math.cos(r)-e[2]*Math.sin(r),u[2]=e[1]*Math.sin(r)+e[2]*Math.cos(r),t[0]=u[0]+a[0],t[1]=u[1]+a[1],t[2]=u[2]+a[2],t},rotateY:function(t,n,a,r){var e=[],u=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],u[0]=e[2]*Math.sin(r)+e[0]*Math.cos(r),u[1]=e[1],u[2]=e[2]*Math.cos(r)-e[0]*Math.sin(r),t[0]=u[0]+a[0],t[1]=u[1]+a[1],t[2]=u[2]+a[2],t},rotateZ:function(t,n,a,r){var e=[],u=[];return e[0]=n[0]-a[0],e[1]=n[1]-a[1],e[2]=n[2]-a[2],u[0]=e[0]*Math.cos(r)-e[1]*Math.sin(r),u[1]=e[0]*Math.sin(r)+e[1]*Math.cos(r),u[2]=e[2],t[0]=u[0]+a[0],t[1]=u[1]+a[1],t[2]=u[2]+a[2],t},angle:function(t,n){var a=t[0],r=t[1],e=t[2],u=n[0],o=n[1],i=n[2],h=Math.sqrt(a*a+r*r+e*e)*Math.sqrt(u*u+o*o+i*i),c=h&&X(t,n)/h;return Math.acos(Math.min(Math.max(c,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=n[0],o=n[1],i=n[2];return Math.abs(a-u)<=1e-6*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-o)<=1e-6*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(e-i)<=1e-6*Math.max(1,Math.abs(e),Math.abs(i))},sub:N,mul:k,div:U,dist:W,sqrDist:C,len:G,sqrLen:H,forEach:J});function $(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function tt(t){var a=new n(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a}function nt(t,a,r,e){var u=new n(4);return u[0]=t,u[1]=a,u[2]=r,u[3]=e,u}function at(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function rt(t,n,a,r,e){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t}function et(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function ut(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function ot(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function it(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ht(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function ct(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.hypot(a,r,e,u)}function st(t,n){var a=n[0]-t[0],r=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return a*a+r*r+e*e+u*u}function Mt(t){var n=t[0],a=t[1],r=t[2],e=t[3];return Math.hypot(n,a,r,e)}function ft(t){var n=t[0],a=t[1],r=t[2],e=t[3];return n*n+a*a+r*r+e*e}function lt(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a*a+r*r+e*e+u*u;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=e*o,t[3]=u*o,t}function vt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function bt(t,n,a,r){var e=n[0],u=n[1],o=n[2],i=n[3];return t[0]=e+r*(a[0]-e),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function dt(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=1e-6*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=1e-6*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(e-h)<=1e-6*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(u-c)<=1e-6*Math.max(1,Math.abs(u),Math.abs(c))}var pt=ut,xt=ot,yt=it,qt=ct,gt=st,_t=Mt,At=ft,wt=function(){var t=$();return function(n,a,r,e,u,o){var i,h;for(a||(a=4),r||(r=0),h=e?Math.min(e*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}(),Rt=Object.freeze({__proto__:null,create:$,clone:tt,fromValues:nt,copy:at,set:rt,add:et,subtract:ut,multiply:ot,divide:it,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:ht,scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},distance:ct,squaredDistance:st,length:Mt,squaredLength:ft,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:lt,dot:vt,cross:function(t,n,a,r){var e=a[0]*r[1]-a[1]*r[0],u=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*u,t[2]=s*h-M*o+l*e,t[3]=-s*i+M*u-f*e,t},lerp:bt,random:function(t,n){var r,e,u,o,i,h;n=n||1;do{i=(r=2*a()-1)*r+(e=2*a()-1)*e}while(i>=1);do{h=(u=2*a()-1)*u+(o=2*a()-1)*o}while(h>=1);var c=Math.sqrt((1-i)/h);return t[0]=n*r,t[1]=n*e,t[2]=n*u*c,t[3]=n*o*c,t},transformMat4:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3];return t[0]=a[0]*r+a[4]*e+a[8]*u+a[12]*o,t[1]=a[1]*r+a[5]*e+a[9]*u+a[13]*o,t[2]=a[2]*r+a[6]*e+a[10]*u+a[14]*o,t[3]=a[3]*r+a[7]*e+a[11]*u+a[15]*o,t},transformQuat:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*u-h*e,M=c*e+h*r-o*u,f=c*u+o*e-i*r,l=-o*r-i*e-h*u;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:mt,equals:dt,sub:pt,mul:xt,div:yt,dist:qt,sqrDist:gt,len:_t,sqrLen:At,forEach:wt});function zt(){var t=new n(4);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function jt(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Pt(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+e*c-u*h,t[1]=e*s+o*h+u*i-r*c,t[2]=u*s+o*c+r*h-e*i,t[3]=o*s-r*i-e*h-u*c,t}function St(t,n,a){a*=.5;var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=e*h+u*i,t[2]=u*h-e*i,t[3]=o*h-r*i,t}function Et(t,n,a){a*=.5;var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-u*i,t[1]=e*h+o*i,t[2]=u*h+r*i,t[3]=o*h-e*i,t}function Ot(t,n,a){a*=.5;var r=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=e*h-r*i,t[2]=u*h+o*i,t[3]=o*h-u*i,t}function Tt(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=Math.sqrt(a*a+r*r+e*e),i=Math.exp(u),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=e*h,t[3]=i*Math.cos(o),t}function Dt(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=Math.sqrt(a*a+r*r+e*e),i=o>0?Math.atan2(o,u)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=e*i,t[3]=.5*Math.log(a*a+r*r+e*e+u*u),t}function Ft(t,n,a,r){var e,u,o,i,h,c=n[0],s=n[1],M=n[2],f=n[3],l=a[0],v=a[1],b=a[2],m=a[3];return(u=c*l+s*v+M*b+f*m)<0&&(u=-u,l=-l,v=-v,b=-b,m=-m),1-u>1e-6?(e=Math.acos(u),o=Math.sin(e),i=Math.sin((1-r)*e)/o,h=Math.sin(r*e)/o):(i=1-r,h=r),t[0]=i*c+h*l,t[1]=i*s+h*v,t[2]=i*M+h*b,t[3]=i*f+h*m,t}function It(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);var u=(e+1)%3,o=(e+2)%3;a=Math.sqrt(n[3*e+e]-n[3*u+u]-n[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(n[3*u+o]-n[3*o+u])*a,t[u]=(n[3*u+e]+n[3*e+u])*a,t[o]=(n[3*o+e]+n[3*e+o])*a}return t}var Lt,Vt,Qt,Yt,Xt,Zt,Bt=tt,Nt=nt,kt=at,Ut=rt,Wt=et,Ct=Pt,Gt=ht,Ht=vt,Jt=bt,Kt=Mt,$t=Kt,tn=ft,nn=tn,an=lt,rn=mt,en=dt,un=(Lt=E(),Vt=T(1,0,0),Qt=T(0,1,0),function(t,n,a){var r=X(n,a);return r<-.999999?(Z(Lt,Vt,n),G(Lt)<1e-6&&Z(Lt,Qt,n),Y(Lt,Lt),jt(t,Lt,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Z(Lt,n,a),t[0]=Lt[0],t[1]=Lt[1],t[2]=Lt[2],t[3]=1+r,an(t,t))}),on=(Yt=zt(),Xt=zt(),function(t,n,a,r,e,u){return Ft(Yt,n,e,u),Ft(Xt,a,r,u),Ft(t,Yt,Xt,2*u*(1-u)),t}),hn=(Zt=b(),function(t,n,a,r){return Zt[0]=a[0],Zt[3]=a[1],Zt[6]=a[2],Zt[1]=r[0],Zt[4]=r[1],Zt[7]=r[2],Zt[2]=-n[0],Zt[5]=-n[1],Zt[8]=-n[2],an(t,It(t,Zt))}),cn=Object.freeze({__proto__:null,create:zt,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:jt,getAxisAngle:function(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>1e-6?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a},getAngle:function(t,n){var a=Ht(t,n);return Math.acos(2*a*a-1)},multiply:Pt,rotateX:St,rotateY:Et,rotateZ:Ot,calculateW:function(t,n){var a=n[0],r=n[1],e=n[2];return t[0]=a,t[1]=r,t[2]=e,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),t},exp:Tt,ln:Dt,pow:function(t,n,a){return Dt(t,n),Gt(t,t,a),Tt(t,t),t},slerp:Ft,random:function(t){var n=a(),r=a(),e=a(),u=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*r),t[1]=u*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*e),t[3]=o*Math.cos(2*Math.PI*e),t},invert:function(t,n){var a=n[0],r=n[1],e=n[2],u=n[3],o=a*a+r*r+e*e+u*u,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-e*i,t[3]=u*i,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},fromMat3:It,fromEuler:function(t,n,a,r){var e=.5*Math.PI/180;n*=e,a*=e,r*=e;var u=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=u*h*s-o*i*c,t[1]=o*i*s+u*h*c,t[2]=o*h*c-u*i*s,t[3]=o*h*s+u*i*c,t},str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},clone:Bt,fromValues:Nt,copy:kt,set:Ut,add:Wt,mul:Ct,scale:Gt,dot:Ht,lerp:Jt,length:Kt,len:$t,squaredLength:tn,sqrLen:nn,normalize:an,exactEquals:rn,equals:en,rotationTo:un,sqlerp:on,setAxes:hn});function sn(t,n,a){var r=.5*a[0],e=.5*a[1],u=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+e*h-u*i,t[5]=e*c+u*o-r*h,t[6]=u*c+r*i-e*o,t[7]=-r*o-e*i-u*h,t}function Mn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}var fn=kt;var ln=kt;function vn(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],p=a[3];return t[0]=r*p+o*b+e*d-u*m,t[1]=e*p+o*m+u*b-r*d,t[2]=u*p+o*d+r*m-e*b,t[3]=o*p-r*b-e*m-u*d,t[4]=r*s+o*i+e*c-u*h+M*p+v*b+f*d-l*m,t[5]=e*s+o*h+u*i-r*c+f*p+v*m+l*b-M*d,t[6]=u*s+o*c+r*h-e*i+l*p+v*d+M*m-f*b,t[7]=o*s-r*i-e*h-u*c+v*p-M*b-f*m-l*d,t}var bn=vn;var mn=Ht;var dn=Kt,pn=dn,xn=tn,yn=xn;var qn=Object.freeze({__proto__:null,create:function(){var t=new n(8);return n!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},clone:function(t){var a=new n(8);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a},fromValues:function(t,a,r,e,u,o,i,h){var c=new n(8);return c[0]=t,c[1]=a,c[2]=r,c[3]=e,c[4]=u,c[5]=o,c[6]=i,c[7]=h,c},fromRotationTranslationValues:function(t,a,r,e,u,o,i){var h=new n(8);h[0]=t,h[1]=a,h[2]=r,h[3]=e;var c=.5*u,s=.5*o,M=.5*i;return h[4]=c*e+s*r-M*a,h[5]=s*e+M*t-c*r,h[6]=M*e+c*a-s*t,h[7]=-c*t-s*a-M*r,h},fromRotationTranslation:sn,fromTranslation:function(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t},fromRotation:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},fromMat4:function(t,a){var r=zt();R(r,a);var e=new n(3);return A(e,a),sn(t,r,e),t},copy:Mn,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},set:function(t,n,a,r,e,u,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=h,t},getReal:fn,getDual:function(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t},setReal:ln,setDual:function(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t},getTranslation:function(t,n){var a=n[4],r=n[5],e=n[6],u=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+u*o+r*h-e*i),t[1]=2*(r*c+u*i+e*o-a*h),t[2]=2*(e*c+u*h+a*i-r*o),t},translate:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=o*i+e*c-u*h+s,t[5]=o*h+u*i-r*c+M,t[6]=o*c+r*h-e*i+f,t[7]=-r*i-e*h-u*c+l,t},rotateX:function(t,n,a){var r=-n[0],e=-n[1],u=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*u-c*e,f=h*o+s*e+c*r-i*u,l=c*o+s*u+i*e-h*r,v=s*o-i*r-h*e-c*u;return St(t,n,a),r=t[0],e=t[1],u=t[2],o=t[3],t[4]=M*o+v*r+f*u-l*e,t[5]=f*o+v*e+l*r-M*u,t[6]=l*o+v*u+M*e-f*r,t[7]=v*o-M*r-f*e-l*u,t},rotateY:function(t,n,a){var r=-n[0],e=-n[1],u=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*u-c*e,f=h*o+s*e+c*r-i*u,l=c*o+s*u+i*e-h*r,v=s*o-i*r-h*e-c*u;return Et(t,n,a),r=t[0],e=t[1],u=t[2],o=t[3],t[4]=M*o+v*r+f*u-l*e,t[5]=f*o+v*e+l*r-M*u,t[6]=l*o+v*u+M*e-f*r,t[7]=v*o-M*r-f*e-l*u,t},rotateZ:function(t,n,a){var r=-n[0],e=-n[1],u=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*u-c*e,f=h*o+s*e+c*r-i*u,l=c*o+s*u+i*e-h*r,v=s*o-i*r-h*e-c*u;return Ot(t,n,a),r=t[0],e=t[1],u=t[2],o=t[3],t[4]=M*o+v*r+f*u-l*e,t[5]=f*o+v*e+l*r-M*u,t[6]=l*o+v*u+M*e-f*r,t[7]=v*o-M*r-f*e-l*u,t},rotateByQuatAppend:function(t,n,a){var r=a[0],e=a[1],u=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*u-c*e,t[1]=h*o+s*e+c*r-i*u,t[2]=c*o+s*u+i*e-h*r,t[3]=s*o-i*r-h*e-c*u,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*u-c*e,t[5]=h*o+s*e+c*r-i*u,t[6]=c*o+s*u+i*e-h*r,t[7]=s*o-i*r-h*e-c*u,t},rotateByQuatPrepend:function(t,n,a){var r=n[0],e=n[1],u=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+e*c-u*h,t[1]=e*s+o*h+u*i-r*c,t[2]=u*s+o*c+r*h-e*i,t[3]=o*s-r*i-e*h-u*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+e*c-u*h,t[5]=e*s+o*h+u*i-r*c,t[6]=u*s+o*c+r*h-e*i,t[7]=o*s-r*i-e*h-u*c,t},rotateAroundAxis:function(t,n,a,r){if(Math.abs(r)<1e-6)return Mn(t,n);var e=Math.hypot(a[0],a[1],a[2]);r*=.5;var u=Math.sin(r),o=u*a[0]/e,i=u*a[1]/e,h=u*a[2]/e,c=Math.cos(r),s=n[0],M=n[1],f=n[2],l=n[3];t[0]=s*c+l*o+M*h-f*i,t[1]=M*c+l*i+f*o-s*h,t[2]=f*c+l*h+s*i-M*o,t[3]=l*c-s*o-M*i-f*h;var v=n[4],b=n[5],m=n[6],d=n[7];return t[4]=v*c+d*o+b*h-m*i,t[5]=b*c+d*i+m*o-v*h,t[6]=m*c+d*h+v*i-b*o,t[7]=d*c-v*o-b*i-m*h,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t},multiply:vn,mul:bn,scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t},dot:mn,lerp:function(t,n,a,r){var e=1-r;return mn(n,a)<0&&(r=-r),t[0]=n[0]*e+a[0]*r,t[1]=n[1]*e+a[1]*r,t[2]=n[2]*e+a[2]*r,t[3]=n[3]*e+a[3]*r,t[4]=n[4]*e+a[4]*r,t[5]=n[5]*e+a[5]*r,t[6]=n[6]*e+a[6]*r,t[7]=n[7]*e+a[7]*r,t},invert:function(t,n){var a=xn(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t},length:dn,len:pn,squaredLength:xn,sqrLen:yn,normalize:function(t,n){var a=xn(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,e=n[1]/a,u=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+e*h+u*c+o*s;t[0]=r,t[1]=e,t[2]=u,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-e*M)/a,t[6]=(c-u*M)/a,t[7]=(s-o*M)/a}return t},str:function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]},equals:function(t,n){var a=t[0],r=t[1],e=t[2],u=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],M=n[1],f=n[2],l=n[3],v=n[4],b=n[5],m=n[6],d=n[7];return Math.abs(a-s)<=1e-6*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-M)<=1e-6*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(e-f)<=1e-6*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(u-l)<=1e-6*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(o-v)<=1e-6*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-b)<=1e-6*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(h-m)<=1e-6*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(c-d)<=1e-6*Math.max(1,Math.abs(c),Math.abs(d))}});function gn(){var t=new n(2);return n!=Float32Array&&(t[0]=0,t[1]=0),t}function _n(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function An(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function wn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function Rn(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function zn(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function jn(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function Pn(t){var n=t[0],a=t[1];return n*n+a*a}var Sn=jn,En=_n,On=An,Tn=wn,Dn=Rn,Fn=zn,In=Pn,Ln=function(){var t=gn();return function(n,a,r,e,u,o){var i,h;for(a||(a=2),r||(r=0),h=e?Math.min(e*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],u(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}(),Vn=Object.freeze({__proto__:null,create:gn,clone:function(t){var a=new n(2);return a[0]=t[0],a[1]=t[1],a},fromValues:function(t,a){var r=new n(2);return r[0]=t,r[1]=a,r},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t},set:function(t,n,a){return t[0]=n,t[1]=a,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t},subtract:_n,multiply:An,divide:wn,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t},distance:Rn,squaredDistance:zn,length:jn,squaredLength:Pn,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},normalize:function(t,n){var a=n[0],r=n[1],e=a*a+r*r;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t},dot:function(t,n){return t[0]*n[0]+t[1]*n[1]},cross:function(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t},lerp:function(t,n,a,r){var e=n[0],u=n[1];return t[0]=e+r*(a[0]-e),t[1]=u+r*(a[1]-u),t},random:function(t,n){n=n||1;var r=2*a()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},transformMat2:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[2]*e,t[1]=a[1]*r+a[3]*e,t},transformMat2d:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[2]*e+a[4],t[1]=a[1]*r+a[3]*e+a[5],t},transformMat3:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[3]*e+a[6],t[1]=a[1]*r+a[4]*e+a[7],t},transformMat4:function(t,n,a){var r=n[0],e=n[1];return t[0]=a[0]*r+a[4]*e+a[12],t[1]=a[1]*r+a[5]*e+a[13],t},rotate:function(t,n,a,r){var e=n[0]-a[0],u=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=e*i-u*o+a[0],t[1]=e*o+u*i+a[1],t},angle:function(t,n){var a=t[0],r=t[1],e=n[0],u=n[1],o=Math.sqrt(a*a+r*r)*Math.sqrt(e*e+u*u),i=o&&(a*e+r*u)/o;return Math.acos(Math.min(Math.max(i,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]},equals:function(t,n){var a=t[0],r=t[1],e=n[0],u=n[1];return Math.abs(a-e)<=1e-6*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-u)<=1e-6*Math.max(1,Math.abs(r),Math.abs(u))},len:Sn,sub:En,mul:On,div:Tn,dist:Dn,sqrDist:Fn,sqrLen:In,forEach:Ln});t.glMatrix=e,t.mat2=c,t.mat2d=v,t.mat3=y,t.mat4=S,t.quat=cn,t.quat2=qn,t.vec2=Vn,t.vec3=K,t.vec4=Rt,Object.defineProperty(t,"__esModule",{value:!0})}));

/* howler.min.js */
/*! howler.js v2.2.0 | (c) 2013-2020, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e?0:o._volume,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},stop:function(){for(var e=this||n,o=0;o<e._howls.length;o++)e._howls[o].stop();return e},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"suspended":"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(o.canPlayType("audio/x-m4b;")||o.canPlayType("audio/m4b;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var t=new Audio;t._unlocked=!0,e._releaseHtml5Audio(t)}catch(n){e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var a=e._howls[r]._getSoundIds(),u=0;u<a.length;u++){var i=e._howls[r]._soundById(a[u]);i&&i._node&&!i._node._unlocked&&(i._node._unlocked=!0,i._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),void 0===d.start?d.noteOn(0):d.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var o=(new Audio).play();return o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var o=this||n;return e._unlocked&&o._html5AudioPool.push(e),o},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var n=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(n,n)}},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onunlock=e.onunlock?[{fn:e.onunlock}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&"none"!==o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e&&(e="__default",!t._playLock)){for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||t._loadQueue("play"),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate),c=t._sprite[e][0]/1e3,f=(t._sprite[e][0]+t._sprite[e][1])/1e3;i._sprite=e,i._ended=!1;var p=function(){i._paused=!1,i._seek=_,i._start=c,i._stop=f,i._loop=!(!i._loop&&!t._sprite[e][2])};if(_>=f)return void t._ended(i);var m=i._node;if(t._webAudio){var v=function(){t._playLock=!1,p(),t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;m.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===m.bufferSource.start?i._loop?m.bufferSource.noteGrainOn(0,_,86400):m.bufferSource.noteGrainOn(0,_,s):i._loop?m.bufferSource.start(0,_,86400):m.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id),t._loadQueue()},0)};"running"===n.state&&"interrupted"!==n.ctx.state?v():(t._playLock=!0,t.once("resume",v),t._clearTimer(i._id))}else{var h=function(){m.currentTime=_,m.muted=i._muted||t._muted||n._muted||m.muted,m.volume=i._volume*n.volume(),m.playbackRate=i._rate;try{var r=m.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(t._playLock=!0,p(),r.then(function(){t._playLock=!1,m._unlocked=!0,o||(t._emit("play",i._id),t._loadQueue())}).catch(function(){t._playLock=!1,t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),i._ended=!0,i._paused=!0})):o||(t._playLock=!1,p(),t._emit("play",i._id),t._loadQueue()),m.playbackRate=i._rate,m.paused)return void t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||i._loop?t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l):(t._endTimers[i._id]=function(){t._ended(i),m.removeEventListener("ended",t._endTimers[i._id],!1)},m.addEventListener("ended",t._endTimers[i._id],!1))}catch(e){t._emit("playerror",i._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===m.src&&(m.src=t._src,m.load());var y=window&&window.ejecta||!m.readyState&&n._navigator.isCocoonJS;if(m.readyState>=3||y)h();else{t._playLock=!0;var g=function(){h(),m.removeEventListener(n._canPlayEvent,g,!1)};m.addEventListener(n._canPlayEvent,g,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&o._clearSound(a._node))),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;e=Math.min(Math.max(0,parseFloat(e)),1),o=Math.min(Math.max(0,parseFloat(o)),1),t=parseFloat(t),a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+t/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(d,e,o,t,u[i],void 0===r)}}return a},_startFadeInterval:function(e,n,o,t,r,a){var u=this,i=n,d=o-n,_=Math.abs(d/.01),s=Math.max(4,_>0?t/_:t),l=Date.now();e._fadeTo=o,e._interval=setInterval(function(){var r=(Date.now()-l)/t;l=Date.now(),i+=d*r,i=d<0?Math.max(o,i):Math.min(o,i),i=Math.round(100*i)/100,u._webAudio?e._volume=i:u.volume(i,e._id,!0),a&&(u._volume=i),(o<n&&i<=o||o>n&&i>=o)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(o,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o.volume(t._fadeTo,e),t._fadeTo=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){t.playing(o[d])&&(i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart),i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),t._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var l=function(){t._emit("seek",o),s&&t.play(o,!0)};if(s&&!t._webAudio){var c=function(){t._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++)o[t]._paused||e.stop(o[t]._id),e._webAudio||(e._clearSound(o[t]._node),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1),n._releaseHtml5Audio(o[t]._node)),delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1);var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src||e._src.indexOf(n._howls[t]._src)>=0){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t._loadQueue(e),t},_loadQueue:function(e){var n=this;if(n._queue.length>0){var o=n._queue[0];o.event===e&&(n._queue.shift(),n._loadQueue()),e||o.action()}return n},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id,!0),o},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var o=n._soundById(e);o&&o._node&&o._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),o},_cleanBuffer:function(e){var o=this,t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,o},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):n.noAudio||(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload=!0===o._preload?"auto":o._preload,e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open(e._xhr.method,n,!0),_.withCredentials=e._xhr.withCredentials,_.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(n){_.setRequestHeader(n,e._xhr.headers[n])}),_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){var t=function(){o._emit("loaderror",null,"Decoding audio data failed.")},a=function(e){e&&o._sounds.length>0?(r[o._src]=e,d(o,e)):t()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(a).catch(t):n.ctx.decodeAudioData(e,a,t)},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!r&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof global?(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t):"undefined"!=typeof window&&(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t)}();
/*! Spatial Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var r=this;return r.ctx&&r.ctx.listener?(n="number"!=typeof n?r._pos[1]:n,t="number"!=typeof t?r._pos[2]:t,"number"!=typeof e?r._pos:(r._pos=[e,n,t],void 0!==r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,n,t,r,o,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var s=a._orientation;return n="number"!=typeof n?s[1]:n,t="number"!=typeof t?s[2]:t,r="number"!=typeof r?s[3]:r,o="number"!=typeof o?s[4]:o,i="number"!=typeof i?s[5]:i,"number"!=typeof e?s:(a._orientation=[e,n,t,r,o,i],void 0!==a.ctx.listener.forwardX?(a.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),a.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),a.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),a.ctx.listener.upZ.setTargetAtTime(i,Howler.ctx.currentTime,.1)):a.ctx.listener.setOrientation(e,n,t,r,o,i),a)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(n,t)}}),r;var o=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return r._stereo;r._stereo=n,r._pos=[n,0,0]}for(var i=r._getSoundIds(t),a=0;a<i.length;a++){var s=r._soundById(i[a]);if(s){if("number"!=typeof n)return s._stereo;s._stereo=n,s._pos=[n,0,0],s._node&&(s._pannerAttr.panningModel="equalpower",s._panner&&s._panner.pan||e(s,o),"spatial"===o?void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):s._panner.setPosition(n,0,0):s._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),r._emit("stereo",s._id)}}return r},Howl.prototype.pos=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,r,o)}}),i;if(t="number"!=typeof t?0:t,r="number"!=typeof r?-.5:r,void 0===o){if("number"!=typeof n)return i._pos;i._pos=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._pos;p._pos=[n,t,r],p._node&&(p._panner&&!p._panner.pan||e(p,"spatial"),void 0!==p._panner.positionX?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setPosition(n,t,r)),i._emit("pos",p._id)}}return i},Howl.prototype.orientation=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,r,o)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,r="number"!=typeof r?i._orientation[2]:r,void 0===o){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._orientation;p._orientation=[n,t,r],p._node&&(p._panner||(p._pos||(p._pos=i._pos||[0,0,-.5]),e(p,"spatial")),void 0!==p._panner.orientationX?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setOrientation(n,t,r)),i._emit("orientation",p._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,r,o=this,i=arguments;if(!o._webAudio)return o;if(0===i.length)return o._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return r=o._soundById(parseInt(i[0],10)),r?r._pannerAttr:o._pannerAttr;n=i[0],void 0===t&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),o._pannerAttr={coneInnerAngle:void 0!==n.pannerAttr.coneInnerAngle?n.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:void 0!==n.pannerAttr.coneOuterAngle?n.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:void 0!==n.pannerAttr.coneOuterGain?n.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:void 0!==n.pannerAttr.distanceModel?n.pannerAttr.distanceModel:o._distanceModel,maxDistance:void 0!==n.pannerAttr.maxDistance?n.pannerAttr.maxDistance:o._maxDistance,refDistance:void 0!==n.pannerAttr.refDistance?n.pannerAttr.refDistance:o._refDistance,rolloffFactor:void 0!==n.pannerAttr.rolloffFactor?n.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:void 0!==n.pannerAttr.panningModel?n.pannerAttr.panningModel:o._panningModel})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=o._getSoundIds(t),s=0;s<a.length;s++)if(r=o._soundById(a[s])){var p=r._pannerAttr;p={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:p.coneOuterAngle,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:p.coneOuterGain,distanceModel:void 0!==n.distanceModel?n.distanceModel:p.distanceModel,maxDistance:void 0!==n.maxDistance?n.maxDistance:p.maxDistance,refDistance:void 0!==n.refDistance?n.refDistance:p.refDistance,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:p.rolloffFactor,panningModel:void 0!==n.panningModel?n.panningModel:p.panningModel};var c=r._panner;c?(c.coneInnerAngle=p.coneInnerAngle,c.coneOuterAngle=p.coneOuterAngle,c.coneOuterGain=p.coneOuterGain,c.distanceModel=p.distanceModel,c.maxDistance=p.maxDistance,c.refDistance=p.refDistance,c.rolloffFactor=p.rolloffFactor,c.panningModel=p.panningModel):(r._pos||(r._pos=o._pos||[0,0,-.5]),e(r,"spatial"))}return o},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,n._stereo?t.stereo(n._stereo):n._pos?t.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,t._refreshBuffer(n)),e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}();
/* 8thwall-camera.js */
/**
 * Sets up the 8thwall pipeline and retrieves tracking events to place an
 * object at the location of the tracked AR camera / mobile device.
 *
 * Use this for SLAM tracking based on 8thwall.
 *
 * Make sure to enable 8thwall in "Project Settings" > "AR". See also the
 * [AR Getting Started Guide](/getting-started/quick-start-ar). */
WL.registerComponent('8thwall-camera', {
    /** Choose front/back camera */
    camera: {type: WL.Type.Enum, values: ['auto', 'back', 'front'], default: 'auto'},
}, {
    name: 'wonderland-engine',

    init: function() {
        this.position = [0, 0, 0, 0];
        this.rotation = [0, 0, 0, 0];
        this.started = false;

        const vals = ['auto', 'back', 'front'];
        this.camera = vals[this.camera];
        if(this.camera == 'auto') {
            this.camera = 'back';
        }

        this.onStart = this.onStart.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

        XR8.addCameraPipelineModules([
            /* Draw the camera feed */
            XR8.GlTextureRenderer.pipelineModule(),
            XR8.XrController.pipelineModule(),
            this,
        ]);

        if(this.camera == 'back') {
            XR8.run({canvas: Module['canvas'], ownRunLoop: false});

        } else if(this.camera == 'back') {
            XR8.XrController.configure({disableWorldTracking: true});
            XR8.run({canvas: Module['canvas'], ownRunLoop: false, cameraConfig: {
                direction: XR8.XrConfig.camera().FRONT
            }});
        } else {
            console.error("[8thwall-camera] Invalid camera setting:", this.camera);
        }
    },

    update: function() {
        if(this.started) {
            if(WL.scene.onPostRender.length == 0) {
                WL.scene.onPreRender.push(function() {
                    XR8.runPreRender(Date.now());
                    _wl_reset_context();
                });
                WL.scene.onPostRender.push(function() {
                    XR8.runPostRender(Date.now());
                    //_wl_reset_context();
                });
            }

            if(this.rotation[0] == 0 && this.rotation[1] == 0 &&
                this.rotation[2] == 0 && this.rotation[3] == 0) {
                return;
            }

            /* Apply the transform retrieved from 8thwall */
            this.object.resetTransform();
            this.object.rotate(this.rotation);
            this.object.translate(this.position);
        }
    },

    /* XR8 CameraPipelineModule functions
     * See: https://www.8thwall.com/docs/web/#camerapipelinemodule */
    onUpdate: function(data) {
        if (!data.processCpuResult.reality) return;
        let r = data.processCpuResult.reality.rotation;
        this.rotation[0] = r.x;
        this.rotation[1] = r.y;
        this.rotation[2] = r.z;
        this.rotation[3] = r.w;
        let p = data.processCpuResult.reality.position;
        this.position[0] = p.x;
        this.position[1] = p.y;
        this.position[2] = p.z;
    },

    onStart: function() {
        this.started = true;
    }
});

/* cursor-target.js */
/**
 * Click/hover target for [cursor](#cursor).
 *
 * To trigger code when clicking or hovering, use `.addHoverFunction(f)`,
 * `.addUnHoverFunction(f)` and `.addClickFunction(f)` with any `function f() {}`.
 *
 * To call members on a different component, you can set up a cursor target like
 * so:
 *
 * ```js
 * start: function() {
 *   let target = this.object.addComponent('cursor-target');
 *   target.addClickFunction(this.onClick.bind(this));
 * },
 * onClick: function() {
 *   console.log(this.object.name, "was clicked!");
 * }
 * ```
 *
 * **Requirements:**
 * - a `collision` component to be attached to the same object.
 *
 * See [Animation Example](/showcase/animation).
 */
WL.registerComponent("cursor-target", {
  }, {
    init: function () {
      this.hoverFunctions = [];
      this.unHoverFunctions = [];
      this.clickFunctions = [];
    },
    onHover: function() {
        for(let i in this.hoverFunctions) this.hoverFunctions[i]();
    },
    onUnhover: function() {
        for(let i in this.unHoverFunctions) this.unHoverFunctions[i]();
    },
    onClick: function() {
        for(let i in this.clickFunctions) this.clickFunctions[i]();
    },
    addHoverFunction: function(f) {
        if(typeof f !== "function") {
            throw new TypeError(this.object.name
                + ".cursor-target: Argument needs to be a function");
        }
        this.hoverFunctions.push(f);
    },
    removeHoverFunction: function(f){
        if(typeof f !== "function") {
            throw new TypeError(this.object.name
                + ".cursor-target: Argument needs to be a function");
        }
        this._removeItemOnce(this.hoverFunctions, f);
    },
    addUnHoverFunction: function(f) {
        if(typeof f !== "function") {
            throw new TypeError(this.object.name
                + ".cursor-target: Argument needs to be a function");
        }
        this.unHoverFunctions.push(f);
    },
    removeUnHoverFunction: function(f) {
        if(typeof f !== "function") {
            throw new TypeError(this.object.name
                + ".cursor-target: Argument needs to be a function");
        }
        this._removeItemOnce(this.unHoverFunctions, f);
    },
    addClickFunction: function(f) {
        if(typeof f !== "function") {
            throw new TypeError(this.object.name
                + ".cursor-target: Argument needs to be a function");
        }
        this.clickFunctions.push(f);
    },
    removeClickFunction: function(f) {
        if(typeof f !== "function") {
            throw new TypeError(this.object.name
                + ".cursor-target: Argument needs to be a function");
        }
        this._removeItemOnce(this.clickFunctions, f);
    },

    _removeItemOnce: function(arr, value) {
        var index = arr.indexOf(value);
        if(index > -1) arr.splice(index, 1);
        return arr;
    }
});


/* cursor.js */
/**
 * 3D cursor for desktop/mobile/VR.
 *
 * Implements a ray-casting cursor into the scene. To react to clicking/hover/unhover
 * use a [cursor-target](#cursor-target).
 *
 * For VR, the ray is cast in direction of
 * [this.object.getForward()](/jsapi/object/#getforward). For desktop and mobile, the
 * forward vector is inverse-projected to account for where on screen the user clicked.
 *
 * **Note:** Make sure to set the collision group to something other than `0`!
 *
 * See [Animation Example](/showcase/animation).
 */
WL.registerComponent('cursor', {
    /** Collision group for the ray cast. Only objects in this group will be affected by this cursor. */
    collisionGroup: {type: WL.Type.Int, default: 1},
    /** (optional) Object that visualizes the cursor's ray. */
    cursorRayObject: {type: WL.Type.Object, default: null},
    /** (optional) Object that visualizes the cursor's hit location. */
    cursorObject: {type: WL.Type.Object, default: null},
    /** Handedness for VR cursors to accept trigger events only from respective controller. */
    handedness: {type: WL.Type.Enum, values: ['input component', 'left', 'right', 'none'], default: 'input component'},
  }, {
    init: function() {
        /* VR session cache, in case in VR */
        this.session = null;
        this.collisionMask = (1 << this.collisionGroup);
    },
    start: function() {
        if(this.handedness == 0) {
            const inputComp = this.object.getComponent('input');
            if(!inputComp) {
                console.warn('cursor component on object', this.object.name,
                    'was configured with handedness "input component", ' +
                    'but object has no input component.');
            } else {
                this.handedness = inputComp.handedness;
            }
        } else {
            this.handedness = ['left', 'right'][this.handedness - 1];
        }

        this.origin = new Float32Array(3);
        this.cursorObjScale = new Float32Array(3);
        this.direction = [0, 0, 0];
        this.tempQuat = new Float32Array(4);
        this.viewComponent = this.object.getComponent("view");
        /* If this object also has a view component, we will enable inverse-projected mouse clicks,
         * otherwise just use the objects transformation */
        if(this.viewComponent != null) {
            WL.canvas.addEventListener("click", this.onClick.bind(this));
            WL.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));

            this.projectionMatrix = new Float32Array(16);
            glMatrix.mat4.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
            WL.canvas.addEventListener("resize", this.onViewportResize.bind(this));
        }
        this.isHovering = false;
        this.visible = true;

        this.cursorPos = new Float32Array(3);
        this.hoveringObject = null;

        WL.onXRSessionStart.push(this.setupVREvents.bind(this));
    },
    onViewportResize: function() {
        /* Projection matrix will change if the viewport is resized, which will affect the
         * projection matrix because of the aspect ratio. */
        glMatrix.mat4.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
    },
    /** 'click' event listener */
    onClick: function(e) {
        let bounds = e.target.getBoundingClientRect();
        let rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
        if(rayHit.hitCount > 0) {
            let o = rayHit.objects[0];
            this._clickOn(o);
        }
    },
    /** Click on given object, which executes the cursor-target onClick callbacks */
    _clickOn: function(o) {
        let cursorTarget = o.getComponent("cursor-target", 0);
        if(cursorTarget) cursorTarget.onClick();
    },

    _setCursorVisibility: function(visible) {
        if(this.visible == visible) return;
        if(visible) {
            this.cursorObject.resetScaling();
            this.cursorObject.scale(this.cursorObjScale);
        } else {
            this.cursorObjScale.set(this.cursorObject.scalingLocal);
            this.cursorObject.scale([0, 0, 0]);
        }

        this.visible = visible;
    },

    update: function() {
        /* If in VR, set the cursor ray based on object transform */
        if(this.session) {
            this.object.getTranslationWorld(this.origin);
            this.object.getForward(this.direction);
            let rayHit = WL.scene.rayCast(this.origin, this.direction, this.collisionMask);

            if(rayHit.hitCount > 0) {
                this.cursorPos.set(rayHit.locations[0]);
            } else {
                this.cursorPos.fill(0);
            }

            if(!this.hoveringObject && rayHit.hitCount > 0) {
                this.hoveringObject = rayHit.objects[0];
                if(this.hoveringObject) {
                    let cursorTarget = this.hoveringObject.getComponent("cursor-target");
                    if(cursorTarget) cursorTarget.onHover();
                }
            } else if(this.hoveringObject && rayHit.hitCount == 0) {
                let cursorTarget = this.hoveringObject.getComponent("cursor-target");
                if(cursorTarget) cursorTarget.onUnhover();
                this.hoveringObject = null;
            }
        }

        if(this.cursorObject) {
            if(this.hoveringObject && (this.cursorPos[0] != 0 || this.cursorPos[1] != 0 || this.cursorPos[2] != 0)) {
                this._setCursorVisibility(true);
                this.cursorObject.setTranslationWorld(this.cursorPos);
            } else {
                this._setCursorVisibility(false);
            }
        }
    },

    /**
     * Setup event listeners on session object
     * @param s WebXR session
     *
     * Sets up 'select' and 'end' events and caches the session to avoid
     * Module object access.
     */
    setupVREvents: function(s) {
        /* If in VR, one-time bind the listener */
        this.session = s;
        s.addEventListener('end', function(e) {
            /* Reset cache once the session ends to rebind select etc, in case
             * it starts again */
            this.session = null;
        }.bind(this));

        s.addEventListener('select', function(e) {
            if(e.inputSource.handedness != this.handedness) return;
            if(this.hoveringObject) {
                this._clickOn(this.hoveringObject);
            }
        }.bind(this));
    },

    /** 'mousemove' event listener */
    onMouseMove: function (e) {
        let bounds = e.target.getBoundingClientRect();
        let rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);

        if(!this.hoveringObject && rayHit.hitCount > 0) {
            this.hoveringObject = rayHit.objects[0];
            WL.canvas.style.cursor = "pointer";
            let cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if(cursorTarget) cursorTarget.onHover();
        } else if(this.hoveringObject && rayHit.hitCount == 0) {
            let cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if(cursorTarget) cursorTarget.onUnhover();
            this.hoveringObject = null;
            WL.canvas.style.cursor = "initial";
        }
    },

    /**
     * Update mouse position in non-VR mode and raycast for new position
     * @returns @ref WL.RayHit for new position.
     */
    updateMousePos: function(clientX, clientY, w, h) {
        this.object.getTranslationWorld(this.origin);

        /* Get direction in normalized device coordinate space from mouse position */
        let left = clientX/w;
        let top = clientY/h;
        this.direction = [left*2 - 1, -top*2 + 1, -1.0];

        /* Reverse-project the direction into view space */
        glMatrix.vec3.transformMat4(this.direction, this.direction,
            this.projectionMatrix);
        glMatrix.vec3.normalize(this.direction, this.direction);
        /* Finally transform the direction into world space */
        glMatrix.quat.invert(this.tempQuat, this.object.transformWorld);
        glMatrix.vec3.transformQuat(this.direction, this.direction,
            this.object.transformWorld);
        let rayHit = WL.scene.rayCast(this.origin, this.direction, this.collisionMask);

        if(rayHit.hitCount > 0) {
            this.cursorPos.set(rayHit.locations[0]);
        } else {
            this.cursorPos.fill(0);
        }

        return rayHit;
    }
});

/* debug-object.js */
/**
 * Prints some limited debug information about the object.
 *
 * Information consists of: This object's name, an object parameter's name,
 * the object's world translation, world transform and local transform.
 *
 * Mainly used by engine developers for debug purposes or as example code.
 */
WL.registerComponent('debug-object', {
    obj: {type: WL.Type.Object}
}, {
    start: function() {
    },
    init: function() {
        let origin = [0, 0, 0];
        glMatrix.quat2.getTranslation(origin, this.object.transformWorld);
        console.log("Debug Object:", this.object.name);
        console.log("Other object:", this.obj.name);
        console.log("\ttranslation", origin);
        console.log("\ttransformWorld", this.object.transformWorld);
        console.log("\ttransformLocal", this.object.transformLocal);
    },
    update: function() {}
});

/* device-orientation-look.js */
/**
 * Function to convert a Euler in YXZ order to a quaternion
 */
var quatFromEulerYXZ = function (out, x, y, z) {
    var cos = Math.cos;
    var sin = Math.sin;

    var c1 = cos(x/2);
    var c2 = cos(y/2);
    var c3 = cos(z/2);

    var s1 = sin(x/2);
    var s2 = sin(y/2);
    var s3 = sin(z/2);

    out[0] = s1*c2*c3 + c1*s2*s3;
    out[1] = c1*s2*c3 - s1*c2*s3;
    out[2] = c1*c2*s3 - s1*s2*c3;
    out[3] = c1*c2*c3 + s1*s2*s3;
};

/**
 * Retrieve device orientation from a mobile device and orient the object
 * accordingly.
 *
 * Useful for magic window experiences.
 */
WL.registerComponent('device-orientation-look', {
}, {
    start: function() {
        this.rotationX = 0;
        this.rotationY = 0;

        this.lastClientX = -1;
        this.lastClientY = -1;
    },
    init: function() {
        /* Initialize device orientation with Identity Quaternion */
        this.deviceOrientation = [0, 0, 0, 1];
        this.screenOrientation = 0;
        this._origin = [0, 0, 0];

        window.addEventListener('deviceorientation',function(e) {
            let alpha = e.alpha || 0;
            let beta = e.beta || 0;
            let gamma = e.gamma || 0;
            const toRad = Math.PI/180;
            quatFromEulerYXZ(this.deviceOrientation, beta*toRad, alpha*toRad, -gamma*toRad);
        }.bind(this));

        window.addEventListener('orientationchange', function(e) {
            this.screenOrientation = window.orientation || 0;
        }.bind(this), false);
    },

    update: function() {
        /* Don't use device orientation in VR */
        if(Module['webxr_session'] != null) return;

        glMatrix.quat2.getTranslation(this._origin, this.object.transformLocal);

        this.object.resetTransform();
        if(this.screenOrientation != 0) {
            this.object.rotateAxisAngleDeg([0, 0, 1], this.screenOrientation);
        }
        this.object.rotate([-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)]);
        this.object.rotate(this.deviceOrientation);
        this.object.translate(this._origin);
    }
});

/* hand-tracking.js */
/**
 * Easy hand tracking through the WebXR Device API
 * ["Hand Input" API](https://immersive-web.github.io/webxr-hand-input/).
 *
 * Allows displaying hands either as sphere-joints or skinned mesh.
 *
 * To react to grabbing, use `this.isGrabbing()`. For other gestures, refer
 * to `this.joints` - an array of [WL.Object](/jsapi/object) and use the joint
 * indices listed [in the WebXR Hand Input specification](https://immersive-web.github.io/webxr-hand-input/#skeleton-joints-section).
 *
 * **Requirements:**
 *  - To use hand-tracking, enable "joint tracking" in `chrome://flags` on
 *    Oculus Browser for Oculus Quest/Oculus Quest 2.
 *
 * See [Hand Tracking Example](/showcase/hand-tracking).
 */
WL.registerComponent('hand-tracking', {
    /** Handedness determining whether to receive tracking input from right or left hand */
    handedness: {type: WL.Type.Enum, default: 'left', values: ['left', 'right']},
    /** (optional) Skinned mesh to use for display */
    jointMesh: {type: WL.Type.Mesh, default: null},
    /** Material to use for display. Applied to either the spawned skinned mesh or the joint spheres. */
    jointMaterial: {type: WL.Type.Material, default: null},
    /** (optional) Skin to apply tracked joint poses to. If not present, joint spheres will be used for display instead. */
    handSkin: {type: WL.Type.Skin, default: null}
}, {
    init: function() {
        this.handedness = ['left', 'right'][this.handedness];
    },
    start: function() {
        this.joints = [];
        this.session = null;
        this.refSpace = null;
        /* Whether last update had a hand pose */
        this.hasPose = false;

        if(!('XRHand' in window)) {
            console.warn("WebXR Hand Tracking not supported by this browser.");
            this.active = false;
            return;
        }

        if(this.handSkin) {
            let skin = this.handSkin;
            let jointIds = skin.jointIds;
            let fingerIndex = 0;
            for(let j = 0; j < jointIds.length; ++j, ++fingerIndex) {
                let joint = new WL.Object(jointIds[j]);
                if(joint.name.endsWith("thumb_null")) {
                    --fingerIndex;
                    continue;
                }
                if(fingerIndex != 0 && fingerIndex % 5 == 0) {
                    this.joints.push(null);
                    --j;
                    continue;
                }

                this.joints.push(joint);
            }

            /* If we have a hand skin, no need to spawn the joints-based one */
            return;
        }

        /* Spawn joints */
        for(let j = 0; j <= XRHand.LITTLE_PHALANX_TIP; ++j) {
            let joint = WL.scene.addObject(this.object);
            let mesh = joint.addComponent('mesh', 0);

            mesh.mesh = this.jointMesh;
            mesh.material = this.jointMaterial;

            this.joints.push(joint);
        }
    },
    update: function(dt) {
        if(!this.session) {
            if(WL.xrSession) this.setupVREvents(WL.xrSession);
        }

        if(this.session && this.session.inputSources && this.refSpace) {
            this.hasPose = true;
            for(let i = 0; i <= this.session.inputSources.length; ++i) {
                const inputSource = this.session.inputSources[i];
                if(!inputSource || !inputSource.hand || inputSource.handedness != this.handedness) continue;

                for(let j = 0; j <= XRHand.LITTLE_PHALANX_TIP; ++j) {
                    const joint = this.joints[j];
                    if(joint == null) continue;

                    let jointPose = null;
                    if(inputSource.hand[j] !== null) {
                        jointPose = Module['webxr_frame'].getJointPose(inputSource.hand[j], this.refSpace);
                    }
                    if(jointPose !== null) {
                        if(this.handSkin) {
                            joint.resetTranslationRotation();
                            joint.transformLocal.set([
                                jointPose.transform.orientation.x,
                                jointPose.transform.orientation.y,
                                jointPose.transform.orientation.z,
                                jointPose.transform.orientation.w]);
                            joint.translate([
                                100*jointPose.transform.position.x,
                                100*jointPose.transform.position.y,
                                100*jointPose.transform.position.z]);
                        } else {
                            joint.resetTransform();
                            joint.transformLocal.set([
                                jointPose.transform.orientation.x,
                                jointPose.transform.orientation.y,
                                jointPose.transform.orientation.z,
                                jointPose.transform.orientation.w]);
                            joint.translate([
                                jointPose.transform.position.x,
                                jointPose.transform.position.y,
                                jointPose.transform.position.z]);
                            joint.scale([jointPose.radius, jointPose.radius, jointPose.radius]);
                        }
                    } else {
                        /* Hack to hide the object */
                        if(!this.handSkin) joint.scale([0, 0, 0]);
                        this.hasPose = false;
                    }
                }
            }
        }
    },

    isGrabbing: function() {
        const indexTipPos = [0, 0, 0];
        glMatrix.quat2.getTranslation(indexTipPos, this.joints[XRHand.INDEX_PHALANX_TIP].transformLocal);
        const thumbTipPos = [0, 0, 0];
        glMatrix.quat2.getTranslation(thumbTipPos, this.joints[XRHand.THUMB_PHALANX_TIP].transformLocal);

        return glMatrix.vec3.sqrDist(thumbTipPos, indexTipPos) < 0.001;
    },

    setupVREvents: function(s) {
        s.requestReferenceSpace('local').then(function(refSpace) { this.refSpace = refSpace; }.bind(this));
        this.session = s;
    },
});

/* hit-test-location.js */
/**
 * Sets up a [WebXR Device API "Hit Test"](https://immersive-web.github.io/hit-test/)
 * and places the object to the hit location.
 *
 * **Requirements:**
 *  - Specify `'hit-test'` in the required or optional features on the AR button in your html file.
 *    See [Wastepaperbin AR](/showcase/wpb-ar) as an example.
 */
WL.registerComponent('hit-test-location', {
}, {
    init: function() {
        WL.onXRSessionStart.push(this.xrSessionStart.bind(this));
        WL.onXRSessionStart.push(this.xrSessionEnd.bind(this));

        this.visible = false;
    },
    start: function() {
    },
    update: function(dt) {
        if(this.xrHitTestSource/* && pose */) {
            const frame = Module['webxr_frame'];
            if(!frame) return;
            let hitTestResults = frame.getHitTestResults(this.xrHitTestSource);
            if(hitTestResults.length > 0) {
                let pose = hitTestResults[0].getPose(this.xrViewerSpace);
                this.visible = true;
                glMatrix.quat2.fromMat4(this.object.transformLocal, pose.transform.matrix);
                this.object.setDirty();
            } else {
                this.visible = false;
            }
        }

        if(!this.visible) {
            this.object.scale([0, 0, 0]);
        } else {
            this.object.resetScaling();
        }
    },
    xrSessionStart: function(session) {
        session.requestReferenceSpace('viewer').then(function(refSpace) {
            this.xrViewerSpace = refSpace;
            session.requestHitTestSource({space: this.xrViewerSpace}).then(function(hitTestSource) {
                this.xrHitTestSource = hitTestSource;
            }.bind(this));
        }.bind(this));
    },
    xrSessionEnd: function() {
        if(!this.xrHitTestSource) return;
        this.xrHitTestSource.cancel();
        this.xrHitTestSource = null;
    },
});

/* howler-audio-listener.js */
/**
 * (Spatial) audio listener based on [Howler.js](https://howlerjs.com/).
 *
 * Retrieves the location and orientation of the object and passes it
 * to [Howler.pos()](https://github.com/goldfire/howler.js#posx-y-z-id)
 * and [Howler.orientation()](https://github.com/goldfire/howler.js#orientationx-y-z-id).
 */
WL.registerComponent("howler-audio-listener", {
  /** Whether audio should be spatialized/positional. */
  spatial: {type: WL.Type.Bool, default: true},
}, {
  init: function() {
    this.origin = [0, 0, 0];
    this.fwd = [0, 0, 0];
    this.up = [0, 0, 0];
  },
  update: function() {
    if(this.spatial) {
      this.object.getTranslationWorld(this.origin);
      this.object.getForward(this.fwd);
      this.object.getUp(this.up);

      Howler.pos(this.origin[0], this.origin[1], this.origin[2]);
      Howler.orientation(this.fwd[0], this.fwd[1], this.fwd[2],
        this.up[0], this.up[1], this.up[2]);
    }
  },
});

/* howler-audio-source.js */
/**
 * (Spatial) audio source based on [Howler.js](https://howlerjs.com/).
 *
 * Creates a Howler audio source, plays an audio file on it and updates
 * its position.
 */
WL.registerComponent("howler-audio-source", {
  /** Volume */
  volume: {type: WL.Type.Float, default: 1.0},
  /** Whether audio should be spatialized/positional */
  spatial: {type: WL.Type.Bool, default: true},
  /** Whether to loop the sound */
  loop: {type: WL.Type.Bool, default: false},
  /** Whether to start playing automatically */
  autoplay: {type: WL.Type.Bool, default: false},
  /** URL to a sound file to play */
  src: {type: WL.Type.String, default: ""}
}, {
  start: function() {
    this.audio = new Howl({
      src: [this.src],
      loop: this.loop,
      volume: this.volume,
      autoplay: this.autoplay
    });
    this.lastPlayedAudioId = null;
    this.origin = [0, 0, 0];
    if(this.spatial && this.autoplay) {
      this.object.getTranslationWorld(this.origin);
      this.audio.pos(this.origin[0], this.origin[1], this.origin[2]);
      this.play();
    }
  },

  update: function() {
    if(!this.lastPlayedAudioId) return;
    this.object.getTranslationWorld(this.origin);
    this.audio.pos(this.origin[0], this.origin[1], this.origin[2], this.lastPlayedAudioId);
  },

  play: function() {
    if(this.lastPlayedAudioId) {
      this.audio.stop(this.lastPlayedAudioId);
    }
    this.lastPlayedAudioId = this.audio.play();
    if(this.spatial) {
      this.object.getTranslationWorld(this.origin);
      this.audio.pos(this.origin[0], this.origin[1], this.origin[2], this.lastPlayedAudioId);
    }
  },

  stop: function() {
    if(this.lastPlayedAudioId) {
      this.audio.stop(this.lastPlayedAudioId);
      this.lastPlayedAudioId = null;
    }
  }
});

/* image-texture.js */
/**
 * Downloads an image from URL and applies it as `diffuseTexture` an attached
 * mesh component.
 *
 * **Warning:** This component will soon be changed to be consistent with
 *   [video-texture](#video-texture) and change a material rather than mesh.
 *   To keep backwards compatibility, please copy the source of this component
 *   into your project.
 */
WL.registerComponent('image-texture', {
    /** URL to download the image from */
    url: {type: WL.Type.String, default: ""},
    /** 0-based mesh component index on this object (e.g. 1 for "second mesh") */
    meshIndex: {type: WL.Type.Int, default: 0}
}, {
    init: function() {
        let obj = this.object;
        WL.textures.load(this.url, 'anonymous')
            .then(function(texture) {
                obj.getComponent("mesh", this.meshIndex).material.diffuseTexture = texture;
            }).catch(console.err);
    }
});

/* mouse-look.js */
/**
 * Controls the camera through mouse movement.
 *
 * Efficiently implemented to affect object orientation only
 * when the mouse moves.
 */
WL.registerComponent('mouse-look', {
    /** Mouse look sensitivity */
    sensitity: {type: WL.Type.Float, default: 0.25},
    /** Require a mouse button to be pressed to control view.
     * Otherwise view will allways follow mouse movement */
    requireMouseDown: {type: WL.Type.Bool, default: true},
    /** If "moveOnClick" is enabled, mouse button which should
     * be held down to control view */
    mouseButtonIndex: {type: WL.Type.Int, default: 0},
}, {
    init: function() {
        this.currentRotationY = 0;
        this.currentRotationX = 0;
        this.origin = new Float32Array(3);
        this.parentOrigin = new Float32Array(3);
        document.addEventListener('mousemove', function(e) {
            if(this.mouseDown || !this.requireMouseDown) {
                this.rotationY = -this.sensitity*e.movementX/100;
                this.rotationX = -this.sensitity*e.movementY/100;

                this.currentRotationX += this.rotationX;
                this.currentRotationY += this.rotationY;

                /* 1.507 = PI/2 = 90° */
                this.currentRotationX = Math.min(1.507, this.currentRotationX);
                this.currentRotationX = Math.max(-1.507, this.currentRotationX);

                this.object.getTranslationWorld(this.origin);
                this.object.parent.getTranslationWorld(this.parentOrigin);
                glMatrix.vec3.sub(this.origin, this.origin, this.parentOrigin);

                this.object.resetTranslationRotation();
                this.object.rotateAxisAngleRad([1, 0, 0], this.currentRotationX);
                this.object.rotateAxisAngleRad([0, 1, 0], this.currentRotationY);
                this.object.translate(this.origin);
            }
        }.bind(this));

        if(this.requireMouseDown) {
            if(this.mouseButtonIndex == 2) {
                WL.canvas.addEventListener("contextmenu", function(e) {
                    e.preventDefault();
                }, false);
            }
            WL.canvas.addEventListener('mousedown', function(e) {
                if(e.button == this.mouseButtonIndex) {
                    this.mouseDown = true;
                    document.body.style.cursor = "grabbing";
                    if(e.button == 1) {
                        e.preventDefault();
                        /* Prevent scrolling */
                        return false;
                    }
                }
            }.bind(this));
            WL.canvas.addEventListener('mouseup', function(e) {
                if(e.button == this.mouseButtonIndex) {
                    this.mouseDown = false;
                    document.body.style.cursor = "initial";
                }
            }.bind(this));
        }
    },
    start: function() {
        this.rotationX = 0;
        this.rotationY = 0;
    }
});

/* teleport-component.js */
/**
 * Basic implementation of teleport VR locomotion.
 *
 * **Note:** Make sure to set the floorGroup to a non-0 value!
 *
 * See [Teleport Example](/showcase/teleport).
 */
WL.registerComponent("teleport-component", {
    /** Object that will be placed as indiciation for where the player will teleport to. */
    teleportIndicatorMeshObject: {type: WL.Type.Object, default: null},
    /** Root of the player, the object that will be positioned on teleportation. */
    camRoot: {type: WL.Type.Object, default: null},
    /** Collision group of valid "floor" objects that can be teleported on */
    floorGroup: {type: WL.Type.Int, default: 1}
}, {
    init: function() {
        if(this.teleportIndicatorMeshObject) {
            let origin = [0, 0, 0];
            glMatrix.quat2.getTranslation(origin, this.object.transformWorld);

            this.isIndicating = false;

            WL.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
            WL.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
            this.indicatorHidden = true;
            this.hitSpot = undefined;
        } else {
            console.error(this.object.name, '- Teleport Component: Teleport indicator mesh is missing.');
        }
    },
    update: function() {
        if(this.isIndicating && this.teleportIndicatorMeshObject)
        {
            let origin = [0, 0, 0];
            glMatrix.quat2.getTranslation(origin, this.object.transformWorld);

            let quat = this.object.transformWorld;

            let forwardDirection = [0, 0, 0];
            glMatrix.vec3.transformQuat(forwardDirection, [0, 0, -1], quat);
            let rayHit = WL.scene.rayCast(origin, forwardDirection, 1 << this.floorGroup);
            if(rayHit.hitCount > 0) {
                if(this.indicatorHidden) {
                    this.indicatorHidden = false;
                }

                this.teleportIndicatorMeshObject.resetTransform();
                this.teleportIndicatorMeshObject.translate(rayHit.locations[0]);

                this.hitSpot = rayHit.locations[0];
            } else {
                if(!this.indicatorHidden) {
                    this.teleportIndicatorMeshObject.translate([1000, 1000, 1000]);
                    this.indicatorHidden = true;
                }
                this.hitSpot = undefined;
            }
        }
    },
    onMouseDown: function(){
        this.isIndicating = true;
    },
    onMouseUp: function(){
        this.isIndicating = false;
        this.teleportIndicatorMeshObject.translate([1000, 1000, 1000]);

        if(this.hitSpot && this.camRoot) {
            this.camRoot.resetTransform();
            this.camRoot.translate(this.hitSpot);
        } else if(!this.camRoot) {
            console.error(this.object.name, '- Teleport Component: Cam Root reference is missing.');
        }
    }
});

/* video-texture.js */
/**
 * Downloads a video from URL and applies it as `diffuseTexture` or `flatTexture` on given material.
 *
 * Video textures need to be updated reqularly whenever
 * a new frame is available. This component handles the
 * detection of a new frame and updates the texture to
 * reflect the video's current frame.
 *
 * The video can be accessed through `this.video`.
 *
 * See [Video Example](/showcase/video).
 */
WL.registerComponent('video-texture', {
    /** URL to download video from */
    url: {type: WL.Type.String, default: ""},
    /** Material to apply the video texture to */
    material: {type: WL.Type.Material},
    /** Whether to loop the video */
    loop: {type: WL.Type.Bool, default: true},
    /** Whether to automatically start playing the video */
    autoplay: {type: WL.Type.Bool, default: true},
    /** Whether to mute sound */
    muted: {type: WL.Type.Bool, default: true},
}, {
    init: function() {
        if(!this.material) {
            console.error("video-texture: material property not set");
            return;
        }
        this.loaded = false;
        this.frameUpdateRequested = true;

        this.video = document.createElement('video');
        this.video.src = this.url;
        this.video.autoplay = this.autoplay;
        this.video.loop = this.loop;
        this.video.muted = this.muted;
        this.video.addEventListener('playing', function() { this.loaded = true; }.bind(this));
        this.video.play();
    },

    applyTexture: function() {
        const mat = this.material;
        this.texture = new WL.Texture(this.video);
        if(mat.shader == "Flat Textured") {
            mat.flatTexture = this.texture;
        } else if(mat.shader == "Phong Textured") {
            mat.diffuseTexture = this.texture;
        } else {
            console.error("Shader", mat.shader, "not supported by video-texture");
        }

        if('requestVideoFrameCallback' in this.video) {
            this.video.requestVideoFrameCallback(this.updateVideo.bind(this));
        } else {
            this.video.addEventListener('timeupdate', function() { this.frameUpdateRequested = true; }.bind(this));
        }
    },

    update: function(dt) {
        if(this.loaded && this.frameUpdateRequested) {
            if(this.texture) {
                this.texture.update();
            } else {
                /* Apply texture on first frame update request */
                this.applyTexture();
            }
            this.frameUpdateRequested = false;
        }
    },

    updateVideo: function() {
        this.frameUpdateRequested = true;
        this.video.requestVideoFrameCallback(this.updateVideo.bind(this));
    }
});

/* vr-mode-active-switch.js */
/**
 * Allows switching all other components on an object to active/inactive
 * depending on whether a VR/AR session is active.
 *
 * Useful for hiding controllers until the user enters VR for example.
 *
 * **Warning**: This component currently can lead to unexpected behaviour.*/
WL.registerComponent("vr-mode-active-switch", {
    /** When components should be active: In VR or when not in VR */
    activateComponents: {type: WL.Type.Enum, values: ["in VR", "in non-VR"], default: "in VR"},
    /** Whether child object's components should be affected */
    affectChildren: {type: WL.Type.Bool, default: true},
}, {
    start: function() {
        this.components = [];
        this.getComponents(this.object);

        /* Initial activation/deactivation */
        this.onXRSessionEnd();

        WL.onXRSessionStart.push(this.onXRSessionStart.bind(this));
        WL.onXRSessionEnd.push(this.onXRSessionEnd.bind(this));
    },

    getComponents: function(obj) {
        this.components = this.components.concat(obj.getComponents());

        if(this.affectChildren) {
            let children = obj.children;
            for(let i = 0; i < children.length; ++i) {
                this.getComponents(children[i]);
            }
        }
    },

    setComponentsActive: function(active) {
        for (let i = 0; i < this.components.length; ++i) {
            this.components[i].active = active;
        }
    },

    onXRSessionStart: function() {
        this.setComponentsActive(this.activateComponents == 0);
    },

    onXRSessionEnd: function() {
        this.setComponentsActive(this.activateComponents != 0);
    },
}
);

/* wasd-controls.js */
/**
 * Basic movement with W/A/S/D keys.
 */
WL.registerComponent('wasd-controls', {
    /** Movement speed in m/s. */
    speed: { type: WL.Type.Float, default: 0.1 },
    /** Object of which the orientation is used to determine forward direction */
    headObject: { type: WL.Type.Object }
}, {
    init: function() {
        this.up = false;
        this.right = false;
        this.down = false;
        this.left = false;

        window.addEventListener('keydown', this.press.bind(this));
        window.addEventListener('keyup', this.release.bind(this));
    },

    start: function() {
        this.headObject = this.headObject || this.object;
    },

    update: function() {
        let direction = [0, 0, 0];

        if (this.up) direction[2] -= 1.0;
        if (this.down) direction[2] += 1.0;
        if (this.left) direction[0] -= 1.0;
        if (this.right) direction[0] += 1.0;

        glMatrix.vec3.normalize(direction, direction);
        direction[0] *= this.speed;
        direction[2] *= this.speed;
        glMatrix.vec3.transformQuat(direction, direction, this.headObject.transformWorld);
        this.object.translate(direction);
    },

    press: function(e) {
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */ ) {
            this.up = true
        } else if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
            this.right = true
        } else if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */ ) {
            this.down = true
        } else if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */ ) {
            this.left = true
        }
    },

    release: function(e) {
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */ ) {
            this.up = false
        } else if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */ ) {
            this.right = false
        } else if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */ ) {
            this.down = false
        } else if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */ ) {
            this.left = false
        }
    }
});

/* wonderleap-ad.js */
/**
 * [Wonderleap](https://wonderleap.co/) Ad Space
 *
 * To serve ads using this component, contact Wonderleap for
 * an Ad User and Ad ID via their website.
 *
 * See [Wonderleap Ad Example](/showcase/wonderleap-ad).
 */
WL.registerComponent('wonderleap-ad', {
    /** Ad user id */
    auId: {type: WL.Type.String, default: 'ce6f68fc-4809-4409-8f57-c631283ce5a3'},
    /** Ad id */
    adId: {type: WL.Type.String}
}, {
    init: function() {
        // TODO: Better let the ad create the correct mesh:
        // this.mesh = this.object.addComponent('mesh');
        // this.mesh.mesh = ...;
        //
        // Missing features:
        //  - [ ] Create Material from shader
        //  - [ ] Reference plane mesh (could create one instead)
        this.mesh = this.object.getComponent('mesh', 0);

        this.collision = this.object.addComponent('collision');
        this.collision.collider = WL.Collider.Box;
        this.collision.group = 0x2;

        this.cursorTarget = this.object.addComponent('cursor-target');

        this.timeSinceLastVizCheck = 0;
        this.visibleDuration = 0;

        /* 10 Seconds min vizibility threshold */
        this.durationThreshold = 10.0;
    },
    start: function() {
        Wonderleap.fetchAd(this.auId).then(function(ad) {
            this.ad = ad;
            WL.textures.load(ad.asset, '')
                .then(function(texture) {
                    const image = WL._images[texture._imageIndex];
                    /* Make ad always 1 meter height, adjust width according to ad aspect ratio */
                    this.collision.extents = [image.width/image.height, 1.0, 0.1];
                    this.object.scale([image.width/image.height, 1.0, 1.0]);
                    if(this.mesh.material.shader == 'Phong Textured') {
                        this.mesh.material.diffuseTexture = texture;
                    } else {
                        this.mesh.material.flatTexture = texture;
                    }
                }.bind(this))
                .catch(console.err);
        }.bind(this));

        this.cursorTarget.addClickFunction(this.click.bind(this));
    },
    update: function(dt) {
        this.timeSinceLastVizCheck += dt;

        /* visibility check */
        if(this.timeSinceLastVizCheck > 0.5) {
            const isVisible = this.isVisible();

            if(isVisible) {
                this.visibleDuration += this.timeSinceLastVizCheck;
            }
            this.timeSinceLastVizCheck = 0;

            if((!isVisible && this.visibleDuration > 0) ||
                this.visibleDuration > this.durationThreshold)
            {
                Wonderleap.sendMetric('gaze', this.visibleDuration, this.ad.adId, this.ad.auId);
                this.visibleDuration = 0;
            }
        }
    },

    isVisible: function() {
        /* Ensure there is a view and it's active */
        const view = WL.scene.activeViews[0];
        if(!view || !view.active) {
            console.warn("wonderleap-ad: camera object does not have an active view");
            return false;
        }

        const transform = view.object.transformWorld;
        const rayOrigin = [0, 0, 0];
        glMatrix.quat2.getTranslation(rayOrigin, transform);
        const rayDir = [0, 0, -1];
        glMatrix.vec3.transformQuat(rayDir, rayDir, transform);

        let hits = WL.scene.rayCast(rayOrigin, rayDir, 0x2);
        for(let i = 0; i < hits.hitCount; ++i) {
            const obj = hits.objects[i];
            if(obj.objectId == this.object.objectId) {
                return true;
            }
        }

        return false;
    },

    click: function() {
        /* Exit VR, in case active, then open link, otherwise open directly */
        const s = Module['webxr_session'];
        if(s) {
            /* Try calling click again once the session ended,
             * this time, the session will be null */
            s.end().then(this.click.bind(this));
            return;
        }

        Wonderleap.sendMetric('click', 0, this.ad.adId, this.ad.auId);
        if(this.ad.url) {
            window.open(this.ad.url, '_blank');
        }
    }
});

/* C:/Program Files/Vhite Rabbit/WonderlandEngine/default-scene/js/ */

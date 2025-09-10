// import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
// import Medicine from '../component/Madicine';


const firebaseConfig = {
  apiKey: "AIzaSyCdYnmf14Je1XwzJ7bbgFulUZHJOf3LqvI",
  authDomain: "health-care-a6b54.firebaseapp.com",
  databaseURL: "https://health-care-a6b54-default-rtdb.firebaseio.com",
  projectId: "health-care-a6b54",
  storageBucket: "health-care-a6b54.appspot.com",
  messagingSenderId: "901807899278",
  appId: "1:901807899278:web:ba6d61d26cc70ab8b3bfdf",
  measurementId: "G-J2JSTZGW9F" 
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//write data in database for making profile
//database for paitent 
function writeUserData1(name, email, imageUrl, mobileno, usrtype) {
  const db = getDatabase(app);
  set(ref(db, 'paitent/' + name + '/'), {

    username: name,
    usertype: usrtype,
    mobileNumber: mobileno,
    email: email,
    profile_picture: imageUrl
  });
}
// database for doctor 
function writeUserData2(name, email, imageUrl, mobileno, usrtype) {
  const db = getDatabase(app);
  set(ref(db, 'doctor/' + name + '/'), {

    username: name,
    usertype: usrtype,
    mobileNumber: mobileno,
    email: email,
    profile_picture: imageUrl
  });
}
///write data for paitent treatment first
function writeUserData3(name, date, discp) {
  const db = getDatabase(app);
  set(ref(db, 'Treatment/' + name + '/' + date), {
    discription: discp
  });
}
//write data for paitent treatment medicine
function writeUserData4(name, date, sno, madicine, quantity, comment) {
  const db = getDatabase(app);
  set(ref(db, 'Treatment/' + name + '/' + date + '/medicine/' + sno), {
    madicine: madicine,
    quantity: quantity,
    comment: comment
  });
}
//function for writing Article 
function WriteArticle1(name, topic, article, imgurl, like) {
  const db = getDatabase(app);
  set(ref(db, 'Article/' + topic + '/' + name + '/'), {
    article: article,
    imgurl: imgurl,
    like: like
  });
}
//read data from database 
const dbRef = ref(getDatabase(app));

////////////////write comment for perticular id
function WriteCommentForId(name, comment, sno, id) {
  const db = getDatabase(app);
  set(ref(db, 'Comment/' + id + '/sno/' + sno + '/'), {
    user: name,
    comment: comment

  });
}
////////////////////function for updating counter for perticular id
function updateCounterForId(id, cnt) {
  const db = getDatabase(app);
  set(ref(db, 'Comment/' + id + '/'), {
    cnt: cnt + 1

  });
}



//---------------------------------------------------------------------------------------------------------
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);///---------------
export const FirebaseProvider = (props) => {

  //read treatment details for paitent of currrent date
  const readTreatmentdetailsofpaitent = (medicine, setmedicine, data, setdata, name, date) => {
    return get(child(dbRef, `Treatment/${name}/${date}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        ///..............................write code for read data of paitent treatment;
        setdata(snapshot.val().discription);
        setmedicine(snapshot.val().medicine);
        // `paitent/${name}`

        // alert("data from data base accessed");
      } else {
        alert("data not exist");
      }
    }).catch((error) => {
      alert("unable to access paitent detail");
    });
  }
  /////////////////////////////////READ - COMMENT ----------------->From ID
  const readCommentFromId = (id, setsnodata,snodata) => {
    return get(child(dbRef, 'Comment/' + id + '/')).then((snapshot) => {
      if (snapshot.exists()) {
        setsnodata(snapshot.val().sno);
        // alert("comment has been accessed");
      }
      else {
        // alert('comment not exist')
      }
    }).catch(() => {
      alert('unable to accessed comment')
    });
  }
  /////////////////////////////////////read comment counter from id
  const readCommentcounterFromId = (id, setcnt) => {
    return get(child(dbRef, 'Comment/' + id +'/' )).then((snapshot) => {
      if (snapshot.exists()) {
        setcnt(snapshot.val().cnt);
        // alert("cnt has been accessed");
      }
      else {
        // alert('cnt not exist')
      }
    }).catch((error) => {
      alert('unable to accessed cnt')
    });
  }


  ///read Article from Article database
  const readArticle1 = (Article, setArticle) => {
    return get(child(dbRef, `Article/`)).then((snapshot) => {
      if (snapshot.exists()) {
        setArticle(snapshot.val());
        // alert("Article from data base accessed");
      } else {
        // alert("data not exist");
      }
    }).catch((error) => {
      // alert("unable to access paitent detail");
    });
  }
  ///////read paitent history from database ;
  const readpaitenthistory = (pname, sethistry) => {
    return get(child(dbRef, 'Treatment/' + pname + '/')).then((snapshot) => {
      if (snapshot.exists()) {
        sethistry(snapshot.val())
        // alert("done")
      }
      else {
        // alert('not exist')
      }
    }).catch((error) => {
      alert("unable to access paitent detail");
    });
  }

  //read data from profile database 
  const readuserprofile1 = (name, setemail, setmobileno, setimgurl, usrtype) => {
    if (usrtype === 'paitent') {
      return get(child(dbRef, `paitent/${name}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setmobileno(snapshot.val().mobileNumber);
          setimgurl(snapshot.val().profile_picture);
          setemail(snapshot.val().email)
          // alert("data from data base accessed");
        } else {
          // alert("data not exist");
        }
      }).catch((error) => {
        // alert("unable to access data");
      });
    }
    return get(child(dbRef, `doctor/${name}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setmobileno(snapshot.val().mobileNumber);
        setimgurl(snapshot.val().profile_picture);
        setemail(snapshot.val().email)

        // alert("data from data base accessed");
      } else {
        // alert("data not exist");
      }
    }).catch((error) => {
      // alert("unable to access data");
    });


  }
  /////updating comment counter from id 
  const updateCounterForId1 = (id, cnt) => {
    return updateCounterForId(id, cnt);
  }
  ///writing comment for perticular id
  const WriteCommentForId1 = (name, comment, sno, id) => {
    return WriteCommentForId(name, comment, sno, id);
  }
  //write article 
  const writearticle = (name, topic, article, imgurl, like) => {
    return WriteArticle1(name, topic, article, imgurl, like)
  }

  // write data for paitent treatment first
  const paitenttreatment = (name, date, discp) => {
    return writeUserData3(name, date, discp);
  }
  //write data for paitent treatment medicine
  const paitenttreatmadicine = (name, date, sno, madicine, quantity, comment) => {
    return writeUserData4(name, date, sno, madicine, quantity, comment)
  }


  // set user profile 
  const setuserprofile = (name, email, imageUrl, mobileno, usrtype) => {
    if (usrtype === 'paitent') return writeUserData1(name, email, imageUrl, mobileno, usrtype)
    return writeUserData2(name, email, imageUrl, mobileno, usrtype)
  }
  //sign up user 
  const signupuser = (email, password, check, setcheck) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => { setcheck(true) }).catch(() => { setcheck(false) });
  }
  const signinuser = (email, password, check, setcheck) => {
    return signInWithEmailAndPassword(auth, email, password).then(() => { setcheck(true) }).catch(() => { setcheck(false) });
  }

  return <FirebaseContext.Provider value={{ updateCounterForId1, WriteCommentForId1, readCommentFromId, readCommentcounterFromId, readpaitenthistory, readArticle1, signupuser, signinuser, setuserprofile, readuserprofile1, paitenttreatment, paitenttreatmadicine, readTreatmentdetailsofpaitent, writearticle }}>{props.children}</FirebaseContext.Provider>
}

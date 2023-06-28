// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  return {
    adminInterfereOnStartRide: [],
    adminInterferenceOnEndRide: [ctc0, ctc0],
    rideEnded: [ctc1, ctc1, ctc1],
    rideStarted: [ctc2, ctc2, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2],
      9: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc5 = stdlib.T_Data({
    Ride_adminInterfereEnd0_353: ctc4,
    Ride_end0_353: ctc2
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v770 = stdlib.protect(ctc0, interact.depositPercentage, 'for Admin\'s interact field depositPercentage');
  const v771 = stdlib.protect(ctc0, interact.feePercentage, 'for Admin\'s interact field feePercentage');
  
  const v776 = stdlib.ge(v771, stdlib.checkedBigNumberify('./index.rsh:134:24:decimal', stdlib.UInt_max, '0'));
  const v777 = stdlib.le(v771, stdlib.checkedBigNumberify('./index.rsh:134:46:decimal', stdlib.UInt_max, '100'));
  const v778 = v776 ? v777 : false;
  stdlib.assert(v778, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:17:function exp)'],
    msg: 'feePercentage must be non-negative',
    who: 'Admin'
    });
  const v780 = stdlib.ge(v770, stdlib.checkedBigNumberify('./index.rsh:139:28:decimal', stdlib.UInt_max, '0'));
  const v781 = stdlib.le(v770, stdlib.checkedBigNumberify('./index.rsh:139:54:decimal', stdlib.UInt_max, '100'));
  const v782 = v780 ? v781 : false;
  stdlib.assert(v782, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:17:function exp)'],
    msg: 'depositPercentage must be non-negative',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v771, v770],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:143:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v785, v786], secs: v788, time: v787, didSend: v67, from: v784 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v785, v786], secs: v788, time: v787, didSend: v67, from: v784 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v797], secs: v799, time: v798, didSend: v99, from: v796 } = txn2;
  const v800 = stdlib.safeMul(v797, v786);
  const v801 = stdlib.safeDiv(v800, stdlib.checkedBigNumberify('./index.rsh:153:61:decimal', stdlib.UInt_max, '100'));
  const v802 = stdlib.safeAdd(v797, v801);
  ;
  const v807 = stdlib.safeMul(v797, v785);
  const v808 = stdlib.safeDiv(v807, stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, '100'));
  const v815 = stdlib.safeAdd(v798, stdlib.checkedBigNumberify('./index.rsh:171:27:decimal', stdlib.UInt_max, '1000'));
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: ['time', v815],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v784, v796, v797, v801, v802, v808, v815],
      evt_cnt: 0,
      funcNum: 3,
      lct: v798,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1165, time: v1164, didSend: v729, from: v1163 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v796,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc6, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1165, time: v1164, didSend: v729, from: v1163 } = txn4;
    ;
    ;
    return;
    
    }
  else {
    const {data: [v824], secs: v826, time: v825, didSend: v145, from: v823 } = txn3;
    ;
    stdlib.protect(ctc1, await interact.ready(), {
      at: './index.rsh:175:23:application',
      fs: ['at ./index.rsh:175:23:application call to [unknown function] (defined at: ./index.rsh:175:23:function exp)', 'at ./index.rsh:175:23:application call to "liftedInteract" (defined at: ./index.rsh:175:23:application)'],
      msg: 'ready',
      who: 'Admin'
      });
    
    let v830 = false;
    let v831 = false;
    let v832 = false;
    let v833 = v825;
    
    let txn4 = txn3;
    while (await (async () => {
      const v846 = v830 ? false : true;
      const v847 = v831 ? v846 : true;
      const v848 = v832 ? false : true;
      const v849 = v847 ? v848 : false;
      
      return v849;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v868], secs: v870, time: v869, didSend: v274, from: v867 } = txn5;
      undefined /* setApiDetails */;
      const v872 = stdlib.addressEq(v867, v796);
      const v873 = stdlib.addressEq(v867, v823);
      const v874 = v872 ? true : v873;
      const v875 = stdlib.addressEq(v867, v784);
      const v876 = v874 ? true : v875;
      stdlib.assert(v876, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)'],
        msg: 'not a participant',
        who: 'Admin'
        });
      ;
      const v884 = null;
      await txn5.getOutput('Ride_start', 'v884', ctc1, v884);
      if (v872) {
        const cv830 = v830;
        const cv831 = true;
        const cv832 = v832;
        const cv833 = v869;
        
        v830 = cv830;
        v831 = cv831;
        v832 = cv832;
        v833 = cv833;
        
        txn4 = txn5;
        continue;}
      else {
        if (v873) {
          const cv830 = true;
          const cv831 = v831;
          const cv832 = v832;
          const cv833 = v869;
          
          v830 = cv830;
          v831 = cv831;
          v832 = cv832;
          v833 = cv833;
          
          txn4 = txn5;
          continue;}
        else {
          null;
          const cv830 = v830;
          const cv831 = v831;
          const cv832 = true;
          const cv833 = v869;
          
          v830 = cv830;
          v831 = cv831;
          v832 = cv832;
          v833 = cv833;
          
          txn4 = txn5;
          continue;}}
      
      }
    const v908 = v831 ? v830 : false;
    if (v908) {
      null;
      let v925 = false;
      let v926 = false;
      let v927 = false;
      let v928 = false;
      let v929 = false;
      let v930 = v833;
      
      let txn5 = txn4;
      while (await (async () => {
        const v943 = v926 ? false : true;
        const v944 = v927 ? v943 : true;
        const v945 = v925 ? false : true;
        const v946 = v944 ? v945 : false;
        
        return v946;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn6;
        switch (v988[0]) {
          case 'Ride_adminInterfereEnd0_353': {
            const v991 = v988[1];
            undefined /* setApiDetails */;
            const v998 = stdlib.addressEq(v987, v784);
            stdlib.assert(v998, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:250:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:70:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
              msg: 'only an admin can interfere',
              who: 'Admin'
              });
            ;
            const v1006 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '0')];
            const v1007 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '1')];
            const v1012 = null;
            await txn6.getOutput('Ride_adminInterfereEnd', 'v1012', ctc1, v1012);
            const cv925 = true;
            const cv926 = v926;
            const cv927 = v927;
            const cv928 = v1007;
            const cv929 = v1006;
            const cv930 = v989;
            
            v925 = cv925;
            v926 = cv926;
            v927 = cv927;
            v928 = cv928;
            v929 = cv929;
            v930 = cv930;
            
            txn5 = txn6;
            continue;
            break;
            }
          case 'Ride_end0_353': {
            const v1049 = v988[1];
            undefined /* setApiDetails */;
            const v1059 = stdlib.addressEq(v987, v796);
            const v1060 = stdlib.addressEq(v987, v823);
            const v1061 = v1059 ? true : v1060;
            stdlib.assert(v1061, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:224:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:223:26:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
              msg: 'not a participant',
              who: 'Admin'
              });
            ;
            const v1086 = null;
            await txn6.getOutput('Ride_end', 'v1086', ctc1, v1086);
            if (v1059) {
              const cv925 = v925;
              const cv926 = v926;
              const cv927 = true;
              const cv928 = v928;
              const cv929 = v929;
              const cv930 = v989;
              
              v925 = cv925;
              v926 = cv926;
              v927 = cv927;
              v928 = cv928;
              v929 = cv929;
              v930 = cv930;
              
              txn5 = txn6;
              continue;}
            else {
              const cv925 = v925;
              const cv926 = true;
              const cv927 = v927;
              const cv928 = v928;
              const cv929 = v929;
              const cv930 = v989;
              
              v925 = cv925;
              v926 = cv926;
              v927 = cv927;
              v928 = cv928;
              v929 = cv929;
              v930 = cv930;
              
              txn5 = txn6;
              continue;}
            break;
            }
          }
        
        }
      let v1107;
      const v1108 = v927 ? v926 : false;
      if (v1108) {
        const v1110 = stdlib.safeSub(v802, v808);
        const v1111 = {
          admin: v808,
          driver: v1110,
          passenger: v801
          };
        v1107 = v1111;
        }
      else {
        if (v927) {
          const v1112 = stdlib.safeSub(v797, v808);
          const v1113 = stdlib.safeAdd(v808, v801);
          const v1114 = {
            admin: v1113,
            driver: v1112,
            passenger: v801
            };
          v1107 = v1114;
          }
        else {
          if (v926) {
            const v1115 = v929 ? v928 : false;
            if (v1115) {
              const v1117 = stdlib.safeSub(v802, v808);
              const v1118 = stdlib.safeAdd(v808, v801);
              const v1119 = {
                admin: v1118,
                driver: v1117,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1107 = v1119;
              }
            else {
              const v1121 = v928 ? false : true;
              const v1122 = v929 ? false : v1121;
              const v1124 = {
                admin: v801,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v802
                };
              const v1126 = {
                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                driver: v801,
                passenger: v802
                };
              const v1178 = v1122 ? v1124 : v1126;
              v1107 = v1178;
              }
            }
          else {
            const v1127 = v929 ? v928 : false;
            if (v1127) {
              const v1128 = stdlib.safeSub(v797, v808);
              const v1129 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'), v801);
              const v1130 = stdlib.safeAdd(v808, v1129);
              const v1131 = {
                admin: v1130,
                driver: v1128,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1107 = v1131;
              }
            else {
              const v1132 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:16:decimal', stdlib.UInt_max, '2'), v801);
              const v1133 = {
                admin: v1132,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v797
                };
              v1107 = v1133;
              }
            }
          }
        }
      const v1134 = v1107.passenger;
      const v1135 = v1107.driver;
      const v1136 = stdlib.safeAdd(v1134, v1135);
      const v1137 = v1107.admin;
      const v1138 = stdlib.safeAdd(v1136, v1137);
      const v1139 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '2'), v801);
      const v1140 = stdlib.safeAdd(v797, v1139);
      const v1141 = stdlib.eq(v1138, v1140);
      stdlib.assert(v1141, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:277:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
        who: 'Admin'
        });
      ;
      ;
      ;
      null;
      return;
      }
    else {
      ;
      ;
      const v922 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
      null;
      return;
      }}
  
  
  
  
  
  };
export async function Driver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Driver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Driver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc5 = stdlib.T_Data({
    Ride_adminInterfereEnd0_353: ctc4,
    Ride_end0_353: ctc1
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v773 = stdlib.protect(ctc0, interact.driverPrice, 'for Driver\'s interact field driverPrice');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v785, v786], secs: v788, time: v787, didSend: v67, from: v784 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v797], secs: v799, time: v798, didSend: v99, from: v796 } = txn2;
  const v800 = stdlib.safeMul(v797, v786);
  const v801 = stdlib.safeDiv(v800, stdlib.checkedBigNumberify('./index.rsh:153:61:decimal', stdlib.UInt_max, '100'));
  const v802 = stdlib.safeAdd(v797, v801);
  ;
  const v807 = stdlib.safeMul(v797, v785);
  const v808 = stdlib.safeDiv(v807, stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, '100'));
  const v815 = stdlib.safeAdd(v798, stdlib.checkedBigNumberify('./index.rsh:171:27:decimal', stdlib.UInt_max, '1000'));
  const v819 = stdlib.ge(v773, stdlib.checkedBigNumberify('./index.rsh:163:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v819, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:14:application call to [unknown function] (defined at: ./index.rsh:161:18:function exp)'],
    msg: 'driverPrice must be non-negative',
    who: 'Driver'
    });
  const v821 = stdlib.eq(v773, v797);
  stdlib.assert(v821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:164:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:14:application call to [unknown function] (defined at: ./index.rsh:161:18:function exp)'],
    msg: 'driverPrice must be equal to passengerPrice',
    who: 'Driver'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v784, v796, v797, v801, v802, v808, v815, v773],
    evt_cnt: 1,
    funcNum: 2,
    lct: v798,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v801, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v824], secs: v826, time: v825, didSend: v145, from: v823 } = txn3;
      
      sim_r.txns.push({
        amt: v801,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v830 = false;
      const v831 = false;
      const v832 = false;
      const v833 = v825;
      
      if (await (async () => {
        const v846 = v830 ? false : true;
        const v847 = v831 ? v846 : true;
        const v848 = v832 ? false : true;
        const v849 = v847 ? v848 : false;
        
        return v849;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v908 = v831 ? v830 : false;
        if (v908) {
          null;
          const v925 = false;
          const v926 = false;
          const v927 = false;
          const v928 = false;
          const v929 = false;
          const v930 = v833;
          
          if (await (async () => {
            const v943 = v926 ? false : true;
            const v944 = v927 ? v943 : true;
            const v945 = v925 ? false : true;
            const v946 = v944 ? v945 : false;
            
            return v946;})()) {
            sim_r.isHalt = false;
            }
          else {
            let v1107;
            const v1108 = v927 ? v926 : false;
            if (v1108) {
              const v1110 = stdlib.safeSub(v802, v808);
              const v1111 = {
                admin: v808,
                driver: v1110,
                passenger: v801
                };
              v1107 = v1111;
              }
            else {
              if (v927) {
                const v1112 = stdlib.safeSub(v797, v808);
                const v1113 = stdlib.safeAdd(v808, v801);
                const v1114 = {
                  admin: v1113,
                  driver: v1112,
                  passenger: v801
                  };
                v1107 = v1114;
                }
              else {
                if (v926) {
                  const v1115 = v929 ? v928 : false;
                  if (v1115) {
                    const v1117 = stdlib.safeSub(v802, v808);
                    const v1118 = stdlib.safeAdd(v808, v801);
                    const v1119 = {
                      admin: v1118,
                      driver: v1117,
                      passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                      };
                    v1107 = v1119;
                    }
                  else {
                    const v1121 = v928 ? false : true;
                    const v1122 = v929 ? false : v1121;
                    const v1124 = {
                      admin: v801,
                      driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      passenger: v802
                      };
                    const v1126 = {
                      admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      driver: v801,
                      passenger: v802
                      };
                    const v1178 = v1122 ? v1124 : v1126;
                    v1107 = v1178;
                    }
                  }
                else {
                  const v1127 = v929 ? v928 : false;
                  if (v1127) {
                    const v1128 = stdlib.safeSub(v797, v808);
                    const v1129 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'), v801);
                    const v1130 = stdlib.safeAdd(v808, v1129);
                    const v1131 = {
                      admin: v1130,
                      driver: v1128,
                      passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                      };
                    v1107 = v1131;
                    }
                  else {
                    const v1132 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:16:decimal', stdlib.UInt_max, '2'), v801);
                    const v1133 = {
                      admin: v1132,
                      driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      passenger: v797
                      };
                    v1107 = v1133;
                    }
                  }
                }
              }
            const v1134 = v1107.passenger;
            const v1135 = v1107.driver;
            const v1137 = v1107.admin;
            sim_r.txns.push({
              kind: 'from',
              to: v823,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v796,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v784,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          
          sim_r.txns.push({
            kind: 'from',
            to: v796,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v823,
            tok: undefined /* Nothing */
            });
          const v922 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v815],
    tys: [ctc6, ctc6, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v784, v796, v797, v801, v802, v808, v815],
      evt_cnt: 0,
      funcNum: 3,
      lct: v798,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1165, time: v1164, didSend: v729, from: v1163 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v796,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc6, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1165, time: v1164, didSend: v729, from: v1163 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:126:29:application',
      fs: ['at ./index.rsh:125:9:application call to [unknown function] (defined at: ./index.rsh:125:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:124:28:function exp)', 'at ./index.rsh:172:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Driver'
      });
    
    return;
    
    }
  else {
    const {data: [v824], secs: v826, time: v825, didSend: v145, from: v823 } = txn3;
    ;
    let v830 = false;
    let v831 = false;
    let v832 = false;
    let v833 = v825;
    
    let txn4 = txn3;
    while (await (async () => {
      const v846 = v830 ? false : true;
      const v847 = v831 ? v846 : true;
      const v848 = v832 ? false : true;
      const v849 = v847 ? v848 : false;
      
      return v849;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v868], secs: v870, time: v869, didSend: v274, from: v867 } = txn5;
      undefined /* setApiDetails */;
      const v872 = stdlib.addressEq(v867, v796);
      const v873 = stdlib.addressEq(v867, v823);
      const v874 = v872 ? true : v873;
      const v875 = stdlib.addressEq(v867, v784);
      const v876 = v874 ? true : v875;
      stdlib.assert(v876, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)'],
        msg: 'not a participant',
        who: 'Driver'
        });
      ;
      const v884 = null;
      await txn5.getOutput('Ride_start', 'v884', ctc2, v884);
      if (v872) {
        const cv830 = v830;
        const cv831 = true;
        const cv832 = v832;
        const cv833 = v869;
        
        v830 = cv830;
        v831 = cv831;
        v832 = cv832;
        v833 = cv833;
        
        txn4 = txn5;
        continue;}
      else {
        if (v873) {
          const cv830 = true;
          const cv831 = v831;
          const cv832 = v832;
          const cv833 = v869;
          
          v830 = cv830;
          v831 = cv831;
          v832 = cv832;
          v833 = cv833;
          
          txn4 = txn5;
          continue;}
        else {
          null;
          const cv830 = v830;
          const cv831 = v831;
          const cv832 = true;
          const cv833 = v869;
          
          v830 = cv830;
          v831 = cv831;
          v832 = cv832;
          v833 = cv833;
          
          txn4 = txn5;
          continue;}}
      
      }
    const v908 = v831 ? v830 : false;
    if (v908) {
      null;
      let v925 = false;
      let v926 = false;
      let v927 = false;
      let v928 = false;
      let v929 = false;
      let v930 = v833;
      
      let txn5 = txn4;
      while (await (async () => {
        const v943 = v926 ? false : true;
        const v944 = v927 ? v943 : true;
        const v945 = v925 ? false : true;
        const v946 = v944 ? v945 : false;
        
        return v946;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn6;
        switch (v988[0]) {
          case 'Ride_adminInterfereEnd0_353': {
            const v991 = v988[1];
            undefined /* setApiDetails */;
            const v998 = stdlib.addressEq(v987, v784);
            stdlib.assert(v998, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:250:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:70:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
              msg: 'only an admin can interfere',
              who: 'Driver'
              });
            ;
            const v1006 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '0')];
            const v1007 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '1')];
            const v1012 = null;
            await txn6.getOutput('Ride_adminInterfereEnd', 'v1012', ctc2, v1012);
            const v1021 = 'Admin detected on end ride.';
            stdlib.protect(ctc2, await interact.log(v1021), {
              at: './index.rsh:255:32:application',
              fs: ['at ./index.rsh:255:32:application call to [unknown function] (defined at: ./index.rsh:255:32:function exp)', 'at ./index.rsh:255:32:application call to "liftedInteract" (defined at: ./index.rsh:255:32:application)', 'at ./index.rsh:253:17:application call to [unknown function] (defined at: ./index.rsh:253:17:function exp)'],
              msg: 'log',
              who: 'Driver'
              });
            
            const cv925 = true;
            const cv926 = v926;
            const cv927 = v927;
            const cv928 = v1007;
            const cv929 = v1006;
            const cv930 = v989;
            
            v925 = cv925;
            v926 = cv926;
            v927 = cv927;
            v928 = cv928;
            v929 = cv929;
            v930 = cv930;
            
            txn5 = txn6;
            continue;
            break;
            }
          case 'Ride_end0_353': {
            const v1049 = v988[1];
            undefined /* setApiDetails */;
            const v1059 = stdlib.addressEq(v987, v796);
            const v1060 = stdlib.addressEq(v987, v823);
            const v1061 = v1059 ? true : v1060;
            stdlib.assert(v1061, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:224:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:223:26:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
              msg: 'not a participant',
              who: 'Driver'
              });
            ;
            const v1086 = null;
            await txn6.getOutput('Ride_end', 'v1086', ctc2, v1086);
            if (v1059) {
              const cv925 = v925;
              const cv926 = v926;
              const cv927 = true;
              const cv928 = v928;
              const cv929 = v929;
              const cv930 = v989;
              
              v925 = cv925;
              v926 = cv926;
              v927 = cv927;
              v928 = cv928;
              v929 = cv929;
              v930 = cv930;
              
              txn5 = txn6;
              continue;}
            else {
              const cv925 = v925;
              const cv926 = true;
              const cv927 = v927;
              const cv928 = v928;
              const cv929 = v929;
              const cv930 = v989;
              
              v925 = cv925;
              v926 = cv926;
              v927 = cv927;
              v928 = cv928;
              v929 = cv929;
              v930 = cv930;
              
              txn5 = txn6;
              continue;}
            break;
            }
          }
        
        }
      let v1107;
      const v1108 = v927 ? v926 : false;
      if (v1108) {
        const v1110 = stdlib.safeSub(v802, v808);
        const v1111 = {
          admin: v808,
          driver: v1110,
          passenger: v801
          };
        v1107 = v1111;
        }
      else {
        if (v927) {
          const v1112 = stdlib.safeSub(v797, v808);
          const v1113 = stdlib.safeAdd(v808, v801);
          const v1114 = {
            admin: v1113,
            driver: v1112,
            passenger: v801
            };
          v1107 = v1114;
          }
        else {
          if (v926) {
            const v1115 = v929 ? v928 : false;
            if (v1115) {
              const v1117 = stdlib.safeSub(v802, v808);
              const v1118 = stdlib.safeAdd(v808, v801);
              const v1119 = {
                admin: v1118,
                driver: v1117,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1107 = v1119;
              }
            else {
              const v1121 = v928 ? false : true;
              const v1122 = v929 ? false : v1121;
              const v1124 = {
                admin: v801,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v802
                };
              const v1126 = {
                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                driver: v801,
                passenger: v802
                };
              const v1178 = v1122 ? v1124 : v1126;
              v1107 = v1178;
              }
            }
          else {
            const v1127 = v929 ? v928 : false;
            if (v1127) {
              const v1128 = stdlib.safeSub(v797, v808);
              const v1129 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'), v801);
              const v1130 = stdlib.safeAdd(v808, v1129);
              const v1131 = {
                admin: v1130,
                driver: v1128,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1107 = v1131;
              }
            else {
              const v1132 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:16:decimal', stdlib.UInt_max, '2'), v801);
              const v1133 = {
                admin: v1132,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v797
                };
              v1107 = v1133;
              }
            }
          }
        }
      const v1134 = v1107.passenger;
      const v1135 = v1107.driver;
      const v1136 = stdlib.safeAdd(v1134, v1135);
      const v1137 = v1107.admin;
      const v1138 = stdlib.safeAdd(v1136, v1137);
      const v1139 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '2'), v801);
      const v1140 = stdlib.safeAdd(v797, v1139);
      const v1141 = stdlib.eq(v1138, v1140);
      stdlib.assert(v1141, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:277:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
        who: 'Driver'
        });
      ;
      ;
      ;
      null;
      return;
      }
    else {
      const v911 = 'BC: does not';
      stdlib.protect(ctc2, await interact.log(v911), {
        at: './index.rsh:208:24:application',
        fs: ['at ./index.rsh:208:24:application call to [unknown function] (defined at: ./index.rsh:208:24:function exp)', 'at ./index.rsh:208:24:application call to "liftedInteract" (defined at: ./index.rsh:208:24:application)'],
        msg: 'log',
        who: 'Driver'
        });
      
      ;
      ;
      const v922 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
      null;
      return;
      }}
  
  
  
  
  
  };
export async function Passenger(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Passenger expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Passenger expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc5 = stdlib.T_Data({
    Ride_adminInterfereEnd0_353: ctc4,
    Ride_end0_353: ctc1
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v772 = stdlib.protect(ctc0, interact.passengerPrice, 'for Passenger\'s interact field passengerPrice');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v785, v786], secs: v788, time: v787, didSend: v67, from: v784 } = txn1;
  ;
  const v791 = stdlib.ge(v772, stdlib.checkedBigNumberify('./index.rsh:150:29:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v791, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:148:17:application call to [unknown function] (defined at: ./index.rsh:148:21:function exp)'],
    msg: 'passengerPrice must be non-negative',
    who: 'Passenger'
    });
  
  const v793 = stdlib.safeMul(v772, v786);
  const v794 = stdlib.safeDiv(v793, stdlib.checkedBigNumberify('./index.rsh:153:61:decimal', stdlib.UInt_max, '100'));
  const v795 = stdlib.safeAdd(v772, v794);
  
  const txn2 = await (ctc.sendrecv({
    args: [v784, v785, v786, v772],
    evt_cnt: 1,
    funcNum: 1,
    lct: v787,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v795, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v797], secs: v799, time: v798, didSend: v99, from: v796 } = txn2;
      
      const v800 = stdlib.safeMul(v797, v786);
      const v801 = stdlib.safeDiv(v800, stdlib.checkedBigNumberify('./index.rsh:153:61:decimal', stdlib.UInt_max, '100'));
      const v802 = stdlib.safeAdd(v797, v801);
      sim_r.txns.push({
        amt: v802,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v807 = stdlib.safeMul(v797, v785);
      const v808 = stdlib.safeDiv(v807, stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, '100'));
      const v815 = stdlib.safeAdd(v798, stdlib.checkedBigNumberify('./index.rsh:171:27:decimal', stdlib.UInt_max, '1000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v797], secs: v799, time: v798, didSend: v99, from: v796 } = txn2;
  const v800 = stdlib.safeMul(v797, v786);
  const v801 = stdlib.safeDiv(v800, stdlib.checkedBigNumberify('./index.rsh:153:61:decimal', stdlib.UInt_max, '100'));
  const v802 = stdlib.safeAdd(v797, v801);
  ;
  const v807 = stdlib.safeMul(v797, v785);
  const v808 = stdlib.safeDiv(v807, stdlib.checkedBigNumberify('./index.rsh:156:50:decimal', stdlib.UInt_max, '100'));
  const v815 = stdlib.safeAdd(v798, stdlib.checkedBigNumberify('./index.rsh:171:27:decimal', stdlib.UInt_max, '1000'));
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: ['time', v815],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v784, v796, v797, v801, v802, v808, v815],
      evt_cnt: 0,
      funcNum: 3,
      lct: v798,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1165, time: v1164, didSend: v729, from: v1163 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v796,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc6, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1165, time: v1164, didSend: v729, from: v1163 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:126:29:application',
      fs: ['at ./index.rsh:125:9:application call to [unknown function] (defined at: ./index.rsh:125:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:124:28:function exp)', 'at ./index.rsh:172:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Passenger'
      });
    
    return;
    
    }
  else {
    const {data: [v824], secs: v826, time: v825, didSend: v145, from: v823 } = txn3;
    ;
    let v830 = false;
    let v831 = false;
    let v832 = false;
    let v833 = v825;
    
    let txn4 = txn3;
    while (await (async () => {
      const v846 = v830 ? false : true;
      const v847 = v831 ? v846 : true;
      const v848 = v832 ? false : true;
      const v849 = v847 ? v848 : false;
      
      return v849;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v868], secs: v870, time: v869, didSend: v274, from: v867 } = txn5;
      undefined /* setApiDetails */;
      const v872 = stdlib.addressEq(v867, v796);
      const v873 = stdlib.addressEq(v867, v823);
      const v874 = v872 ? true : v873;
      const v875 = stdlib.addressEq(v867, v784);
      const v876 = v874 ? true : v875;
      stdlib.assert(v876, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)'],
        msg: 'not a participant',
        who: 'Passenger'
        });
      ;
      const v884 = null;
      await txn5.getOutput('Ride_start', 'v884', ctc2, v884);
      if (v872) {
        const cv830 = v830;
        const cv831 = true;
        const cv832 = v832;
        const cv833 = v869;
        
        v830 = cv830;
        v831 = cv831;
        v832 = cv832;
        v833 = cv833;
        
        txn4 = txn5;
        continue;}
      else {
        if (v873) {
          const cv830 = true;
          const cv831 = v831;
          const cv832 = v832;
          const cv833 = v869;
          
          v830 = cv830;
          v831 = cv831;
          v832 = cv832;
          v833 = cv833;
          
          txn4 = txn5;
          continue;}
        else {
          null;
          const cv830 = v830;
          const cv831 = v831;
          const cv832 = true;
          const cv833 = v869;
          
          v830 = cv830;
          v831 = cv831;
          v832 = cv832;
          v833 = cv833;
          
          txn4 = txn5;
          continue;}}
      
      }
    const v908 = v831 ? v830 : false;
    if (v908) {
      null;
      let v925 = false;
      let v926 = false;
      let v927 = false;
      let v928 = false;
      let v929 = false;
      let v930 = v833;
      
      let txn5 = txn4;
      while (await (async () => {
        const v943 = v926 ? false : true;
        const v944 = v927 ? v943 : true;
        const v945 = v925 ? false : true;
        const v946 = v944 ? v945 : false;
        
        return v946;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn6;
        switch (v988[0]) {
          case 'Ride_adminInterfereEnd0_353': {
            const v991 = v988[1];
            undefined /* setApiDetails */;
            const v998 = stdlib.addressEq(v987, v784);
            stdlib.assert(v998, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:250:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:70:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
              msg: 'only an admin can interfere',
              who: 'Passenger'
              });
            ;
            const v1006 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '0')];
            const v1007 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '1')];
            const v1012 = null;
            await txn6.getOutput('Ride_adminInterfereEnd', 'v1012', ctc2, v1012);
            const cv925 = true;
            const cv926 = v926;
            const cv927 = v927;
            const cv928 = v1007;
            const cv929 = v1006;
            const cv930 = v989;
            
            v925 = cv925;
            v926 = cv926;
            v927 = cv927;
            v928 = cv928;
            v929 = cv929;
            v930 = cv930;
            
            txn5 = txn6;
            continue;
            break;
            }
          case 'Ride_end0_353': {
            const v1049 = v988[1];
            undefined /* setApiDetails */;
            const v1059 = stdlib.addressEq(v987, v796);
            const v1060 = stdlib.addressEq(v987, v823);
            const v1061 = v1059 ? true : v1060;
            stdlib.assert(v1061, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:224:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:223:26:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
              msg: 'not a participant',
              who: 'Passenger'
              });
            ;
            const v1086 = null;
            await txn6.getOutput('Ride_end', 'v1086', ctc2, v1086);
            if (v1059) {
              const cv925 = v925;
              const cv926 = v926;
              const cv927 = true;
              const cv928 = v928;
              const cv929 = v929;
              const cv930 = v989;
              
              v925 = cv925;
              v926 = cv926;
              v927 = cv927;
              v928 = cv928;
              v929 = cv929;
              v930 = cv930;
              
              txn5 = txn6;
              continue;}
            else {
              const cv925 = v925;
              const cv926 = true;
              const cv927 = v927;
              const cv928 = v928;
              const cv929 = v929;
              const cv930 = v989;
              
              v925 = cv925;
              v926 = cv926;
              v927 = cv927;
              v928 = cv928;
              v929 = cv929;
              v930 = cv930;
              
              txn5 = txn6;
              continue;}
            break;
            }
          }
        
        }
      let v1107;
      const v1108 = v927 ? v926 : false;
      if (v1108) {
        const v1110 = stdlib.safeSub(v802, v808);
        const v1111 = {
          admin: v808,
          driver: v1110,
          passenger: v801
          };
        v1107 = v1111;
        }
      else {
        if (v927) {
          const v1112 = stdlib.safeSub(v797, v808);
          const v1113 = stdlib.safeAdd(v808, v801);
          const v1114 = {
            admin: v1113,
            driver: v1112,
            passenger: v801
            };
          v1107 = v1114;
          }
        else {
          if (v926) {
            const v1115 = v929 ? v928 : false;
            if (v1115) {
              const v1117 = stdlib.safeSub(v802, v808);
              const v1118 = stdlib.safeAdd(v808, v801);
              const v1119 = {
                admin: v1118,
                driver: v1117,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1107 = v1119;
              }
            else {
              const v1121 = v928 ? false : true;
              const v1122 = v929 ? false : v1121;
              const v1124 = {
                admin: v801,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v802
                };
              const v1126 = {
                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                driver: v801,
                passenger: v802
                };
              const v1178 = v1122 ? v1124 : v1126;
              v1107 = v1178;
              }
            }
          else {
            const v1127 = v929 ? v928 : false;
            if (v1127) {
              const v1128 = stdlib.safeSub(v797, v808);
              const v1129 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'), v801);
              const v1130 = stdlib.safeAdd(v808, v1129);
              const v1131 = {
                admin: v1130,
                driver: v1128,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1107 = v1131;
              }
            else {
              const v1132 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:16:decimal', stdlib.UInt_max, '2'), v801);
              const v1133 = {
                admin: v1132,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v797
                };
              v1107 = v1133;
              }
            }
          }
        }
      const v1134 = v1107.passenger;
      const v1135 = v1107.driver;
      const v1136 = stdlib.safeAdd(v1134, v1135);
      const v1137 = v1107.admin;
      const v1138 = stdlib.safeAdd(v1136, v1137);
      const v1139 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '2'), v801);
      const v1140 = stdlib.safeAdd(v797, v1139);
      const v1141 = stdlib.eq(v1138, v1140);
      stdlib.assert(v1141, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:277:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
        who: 'Passenger'
        });
      ;
      ;
      ;
      null;
      return;
      }
    else {
      ;
      ;
      const v922 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
      null;
      return;
      }}
  
  
  
  
  
  };
export async function _Ride_adminInterfereEnd7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Ride_adminInterfereEnd7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Ride_adminInterfereEnd7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Ride_adminInterfereEnd0_353: ctc3,
    Ride_end0_353: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v784, v796, v797, v801, v802, v808, v823, v925, v926, v927, v928, v929] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v959 = ctc.selfAddress();
  const v961 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:249:70:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to "runRide_adminInterfereEnd0_353" (defined at: ./index.rsh:249:12:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
    msg: 'in',
    who: 'Ride_adminInterfereEnd'
    });
  const v966 = stdlib.addressEq(v959, v784);
  stdlib.assert(v966, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:250:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:70:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to "runRide_adminInterfereEnd0_353" (defined at: ./index.rsh:249:12:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
    msg: 'only an admin can interfere',
    who: 'Ride_adminInterfereEnd'
    });
  const v975 = ['Ride_adminInterfereEnd0_353', v961];
  
  const txn1 = await (ctc.sendrecv({
    args: [v784, v796, v797, v801, v802, v808, v823, v925, v926, v927, v928, v929, v975],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:252:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn1;
      
      switch (v988[0]) {
        case 'Ride_adminInterfereEnd0_353': {
          const v991 = v988[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Ride_adminInterfereEnd"
            });
          ;
          const v1006 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '0')];
          const v1007 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '1')];
          const v1012 = null;
          const v1013 = await txn1.getOutput('Ride_adminInterfereEnd', 'v1012', ctc6, v1012);
          
          const v1629 = true;
          const v1630 = v926;
          const v1631 = v927;
          const v1632 = v1007;
          const v1633 = v1006;
          const v1635 = v926 ? false : true;
          const v1636 = v927 ? v1635 : true;
          const v1638 = v1636 ? false : false;
          if (v1638) {
            sim_r.isHalt = false;
            }
          else {
            let v1639;
            const v1640 = v927 ? v926 : false;
            if (v1640) {
              const v1641 = stdlib.safeSub(v802, v808);
              const v1642 = {
                admin: v808,
                driver: v1641,
                passenger: v801
                };
              v1639 = v1642;
              }
            else {
              if (v927) {
                const v1643 = stdlib.safeSub(v797, v808);
                const v1644 = stdlib.safeAdd(v808, v801);
                const v1645 = {
                  admin: v1644,
                  driver: v1643,
                  passenger: v801
                  };
                v1639 = v1645;
                }
              else {
                if (v926) {
                  const v1646 = v1006 ? v1007 : false;
                  if (v1646) {
                    const v1647 = stdlib.safeSub(v802, v808);
                    const v1648 = stdlib.safeAdd(v808, v801);
                    const v1649 = {
                      admin: v1648,
                      driver: v1647,
                      passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                      };
                    v1639 = v1649;
                    }
                  else {
                    const v1650 = v1007 ? false : true;
                    const v1651 = v1006 ? false : v1650;
                    const v1652 = {
                      admin: v801,
                      driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      passenger: v802
                      };
                    const v1653 = {
                      admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      driver: v801,
                      passenger: v802
                      };
                    const v1654 = v1651 ? v1652 : v1653;
                    v1639 = v1654;
                    }
                  }
                else {
                  const v1655 = v1006 ? v1007 : false;
                  if (v1655) {
                    const v1656 = stdlib.safeSub(v797, v808);
                    const v1657 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'), v801);
                    const v1658 = stdlib.safeAdd(v808, v1657);
                    const v1659 = {
                      admin: v1658,
                      driver: v1656,
                      passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                      };
                    v1639 = v1659;
                    }
                  else {
                    const v1660 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:16:decimal', stdlib.UInt_max, '2'), v801);
                    const v1661 = {
                      admin: v1660,
                      driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      passenger: v797
                      };
                    v1639 = v1661;
                    }
                  }
                }
              }
            const v1662 = v1639.passenger;
            const v1663 = v1639.driver;
            const v1665 = v1639.admin;
            sim_r.txns.push({
              kind: 'from',
              to: v823,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v796,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v784,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Ride_end0_353': {
          const v1049 = v988[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn1;
  switch (v988[0]) {
    case 'Ride_adminInterfereEnd0_353': {
      const v991 = v988[1];
      undefined /* setApiDetails */;
      const v998 = stdlib.addressEq(v987, v784);
      stdlib.assert(v998, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:250:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:70:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:249:70:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
        msg: 'only an admin can interfere',
        who: 'Ride_adminInterfereEnd'
        });
      ;
      const v1006 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '0')];
      const v1007 = v991[stdlib.checkedBigNumberify('./index.rsh:249:12:spread', stdlib.UInt_max, '1')];
      const v1012 = null;
      const v1013 = await txn1.getOutput('Ride_adminInterfereEnd', 'v1012', ctc6, v1012);
      if (v568) {
        stdlib.protect(ctc6, await interact.out(v991, v1013), {
          at: './index.rsh:249:13:application',
          fs: ['at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)', 'at ./index.rsh:254:16:application call to "ret" (defined at: ./index.rsh:253:17:function exp)', 'at ./index.rsh:253:17:application call to [unknown function] (defined at: ./index.rsh:253:17:function exp)'],
          msg: 'out',
          who: 'Ride_adminInterfereEnd'
          });
        }
      else {
        }
      
      const v1629 = true;
      const v1630 = v926;
      const v1631 = v927;
      const v1632 = v1007;
      const v1633 = v1006;
      const v1635 = v926 ? false : true;
      const v1636 = v927 ? v1635 : true;
      const v1638 = v1636 ? false : false;
      if (v1638) {
        return;
        }
      else {
        let v1639;
        const v1640 = v927 ? v926 : false;
        if (v1640) {
          const v1641 = stdlib.safeSub(v802, v808);
          const v1642 = {
            admin: v808,
            driver: v1641,
            passenger: v801
            };
          v1639 = v1642;
          }
        else {
          if (v927) {
            const v1643 = stdlib.safeSub(v797, v808);
            const v1644 = stdlib.safeAdd(v808, v801);
            const v1645 = {
              admin: v1644,
              driver: v1643,
              passenger: v801
              };
            v1639 = v1645;
            }
          else {
            if (v926) {
              const v1646 = v1006 ? v1007 : false;
              if (v1646) {
                const v1647 = stdlib.safeSub(v802, v808);
                const v1648 = stdlib.safeAdd(v808, v801);
                const v1649 = {
                  admin: v1648,
                  driver: v1647,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1639 = v1649;
                }
              else {
                const v1650 = v1007 ? false : true;
                const v1651 = v1006 ? false : v1650;
                const v1652 = {
                  admin: v801,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v802
                  };
                const v1653 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v801,
                  passenger: v802
                  };
                const v1654 = v1651 ? v1652 : v1653;
                v1639 = v1654;
                }
              }
            else {
              const v1655 = v1006 ? v1007 : false;
              if (v1655) {
                const v1656 = stdlib.safeSub(v797, v808);
                const v1657 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'), v801);
                const v1658 = stdlib.safeAdd(v808, v1657);
                const v1659 = {
                  admin: v1658,
                  driver: v1656,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1639 = v1659;
                }
              else {
                const v1660 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:16:decimal', stdlib.UInt_max, '2'), v801);
                const v1661 = {
                  admin: v1660,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v797
                  };
                v1639 = v1661;
                }
              }
            }
          }
        const v1662 = v1639.passenger;
        const v1663 = v1639.driver;
        const v1664 = stdlib.safeAdd(v1662, v1663);
        const v1665 = v1639.admin;
        const v1666 = stdlib.safeAdd(v1664, v1665);
        const v1667 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '2'), v801);
        const v1668 = stdlib.safeAdd(v797, v1667);
        const v1669 = stdlib.eq(v1666, v1668);
        stdlib.assert(v1669, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:277:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
          msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
          who: 'Ride_adminInterfereEnd'
          });
        ;
        ;
        ;
        null;
        return;
        }
      break;
      }
    case 'Ride_end0_353': {
      const v1049 = v988[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Ride_end7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Ride_end7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Ride_end7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc5 = stdlib.T_Data({
    Ride_adminInterfereEnd0_353: ctc4,
    Ride_end0_353: ctc3
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v784, v796, v797, v801, v802, v808, v823, v925, v926, v927, v928, v929] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v947 = ctc.selfAddress();
  const v949 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:223:26:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to "runRide_end0_353" (defined at: ./index.rsh:223:12:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
    msg: 'in',
    who: 'Ride_end'
    });
  const v950 = stdlib.addressEq(v947, v796);
  const v951 = stdlib.addressEq(v947, v823);
  const v952 = v950 ? true : v951;
  stdlib.assert(v952, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:224:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:223:26:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to "runRide_end0_353" (defined at: ./index.rsh:223:12:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
    msg: 'not a participant',
    who: 'Ride_end'
    });
  const v957 = ['Ride_end0_353', v949];
  
  const txn1 = await (ctc.sendrecv({
    args: [v784, v796, v797, v801, v802, v808, v823, v925, v926, v927, v928, v929, v957],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:226:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn1;
      
      switch (v988[0]) {
        case 'Ride_adminInterfereEnd0_353': {
          const v991 = v988[1];
          
          break;
          }
        case 'Ride_end0_353': {
          const v1049 = v988[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Ride_end"
            });
          const v1059 = stdlib.addressEq(v987, v796);
          ;
          const v1086 = null;
          const v1087 = await txn1.getOutput('Ride_end', 'v1086', ctc6, v1086);
          
          if (v1059) {
            const v1793 = v925;
            const v1794 = v926;
            const v1795 = true;
            const v1796 = v928;
            const v1797 = v929;
            const v1801 = v925 ? false : true;
            const v1802 = v926 ? false : v1801;
            if (v1802) {
              sim_r.isHalt = false;
              }
            else {
              let v1803;
              if (v926) {
                const v1805 = stdlib.safeSub(v802, v808);
                const v1806 = {
                  admin: v808,
                  driver: v1805,
                  passenger: v801
                  };
                v1803 = v1806;
                }
              else {
                const v1807 = stdlib.safeSub(v797, v808);
                const v1808 = stdlib.safeAdd(v808, v801);
                const v1809 = {
                  admin: v1808,
                  driver: v1807,
                  passenger: v801
                  };
                v1803 = v1809;
                }
              const v1826 = v1803.passenger;
              const v1827 = v1803.driver;
              const v1829 = v1803.admin;
              sim_r.txns.push({
                kind: 'from',
                to: v823,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v796,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v784,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1834 = v925;
            const v1835 = true;
            const v1836 = v927;
            const v1837 = v928;
            const v1838 = v929;
            const v1842 = v925 ? false : true;
            const v1843 = v927 ? false : v1842;
            if (v1843) {
              sim_r.isHalt = false;
              }
            else {
              let v1844;
              if (v927) {
                const v1846 = stdlib.safeSub(v802, v808);
                const v1847 = {
                  admin: v808,
                  driver: v1846,
                  passenger: v801
                  };
                v1844 = v1847;
                }
              else {
                const v1851 = v929 ? v928 : false;
                if (v1851) {
                  const v1852 = stdlib.safeSub(v802, v808);
                  const v1853 = stdlib.safeAdd(v808, v801);
                  const v1854 = {
                    admin: v1853,
                    driver: v1852,
                    passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                    };
                  v1844 = v1854;
                  }
                else {
                  const v1855 = v928 ? false : true;
                  const v1856 = v929 ? false : v1855;
                  const v1857 = {
                    admin: v801,
                    driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    passenger: v802
                    };
                  const v1858 = {
                    admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    driver: v801,
                    passenger: v802
                    };
                  const v1859 = v1856 ? v1857 : v1858;
                  v1844 = v1859;
                  }
                }
              const v1867 = v1844.passenger;
              const v1868 = v1844.driver;
              const v1870 = v1844.admin;
              sim_r.txns.push({
                kind: 'from',
                to: v823,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v796,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v784,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v988], secs: v990, time: v989, didSend: v568, from: v987 } = txn1;
  switch (v988[0]) {
    case 'Ride_adminInterfereEnd0_353': {
      const v991 = v988[1];
      return;
      break;
      }
    case 'Ride_end0_353': {
      const v1049 = v988[1];
      undefined /* setApiDetails */;
      const v1059 = stdlib.addressEq(v987, v796);
      const v1060 = stdlib.addressEq(v987, v823);
      const v1061 = v1059 ? true : v1060;
      stdlib.assert(v1061, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:224:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:223:26:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:223:26:function exp)', 'at ./index.rsh:220:23:application call to [unknown function] (defined at: ./index.rsh:220:23:function exp)'],
        msg: 'not a participant',
        who: 'Ride_end'
        });
      ;
      const v1086 = null;
      const v1087 = await txn1.getOutput('Ride_end', 'v1086', ctc6, v1086);
      if (v568) {
        stdlib.protect(ctc6, await interact.out(v1049, v1087), {
          at: './index.rsh:223:13:application',
          fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)', 'at ./index.rsh:228:16:application call to "ret" (defined at: ./index.rsh:227:17:function exp)', 'at ./index.rsh:227:17:application call to [unknown function] (defined at: ./index.rsh:227:17:function exp)'],
          msg: 'out',
          who: 'Ride_end'
          });
        }
      else {
        }
      
      if (v1059) {
        const v1793 = v925;
        const v1794 = v926;
        const v1795 = true;
        const v1796 = v928;
        const v1797 = v929;
        const v1801 = v925 ? false : true;
        const v1802 = v926 ? false : v1801;
        if (v1802) {
          return;
          }
        else {
          let v1803;
          if (v926) {
            const v1805 = stdlib.safeSub(v802, v808);
            const v1806 = {
              admin: v808,
              driver: v1805,
              passenger: v801
              };
            v1803 = v1806;
            }
          else {
            const v1807 = stdlib.safeSub(v797, v808);
            const v1808 = stdlib.safeAdd(v808, v801);
            const v1809 = {
              admin: v1808,
              driver: v1807,
              passenger: v801
              };
            v1803 = v1809;
            }
          const v1826 = v1803.passenger;
          const v1827 = v1803.driver;
          const v1828 = stdlib.safeAdd(v1826, v1827);
          const v1829 = v1803.admin;
          const v1830 = stdlib.safeAdd(v1828, v1829);
          const v1831 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '2'), v801);
          const v1832 = stdlib.safeAdd(v797, v1831);
          const v1833 = stdlib.eq(v1830, v1832);
          stdlib.assert(v1833, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:277:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
            msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
            who: 'Ride_end'
            });
          ;
          ;
          ;
          null;
          return;
          }}
      else {
        const v1834 = v925;
        const v1835 = true;
        const v1836 = v927;
        const v1837 = v928;
        const v1838 = v929;
        const v1842 = v925 ? false : true;
        const v1843 = v927 ? false : v1842;
        if (v1843) {
          return;
          }
        else {
          let v1844;
          if (v927) {
            const v1846 = stdlib.safeSub(v802, v808);
            const v1847 = {
              admin: v808,
              driver: v1846,
              passenger: v801
              };
            v1844 = v1847;
            }
          else {
            const v1851 = v929 ? v928 : false;
            if (v1851) {
              const v1852 = stdlib.safeSub(v802, v808);
              const v1853 = stdlib.safeAdd(v808, v801);
              const v1854 = {
                admin: v1853,
                driver: v1852,
                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                };
              v1844 = v1854;
              }
            else {
              const v1855 = v928 ? false : true;
              const v1856 = v929 ? false : v1855;
              const v1857 = {
                admin: v801,
                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                passenger: v802
                };
              const v1858 = {
                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                driver: v801,
                passenger: v802
                };
              const v1859 = v1856 ? v1857 : v1858;
              v1844 = v1859;
              }
            }
          const v1867 = v1844.passenger;
          const v1868 = v1844.driver;
          const v1869 = stdlib.safeAdd(v1867, v1868);
          const v1870 = v1844.admin;
          const v1871 = stdlib.safeAdd(v1869, v1870);
          const v1872 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:279:26:decimal', stdlib.UInt_max, '2'), v801);
          const v1873 = stdlib.safeAdd(v797, v1872);
          const v1874 = stdlib.eq(v1871, v1873);
          stdlib.assert(v1874, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:277:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
            msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
            who: 'Ride_end'
            });
          ;
          ;
          ;
          null;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function _Ride_start9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Ride_start9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Ride_start9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v784, v796, v797, v801, v802, v808, v823, v830, v831, v832] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2]);
  const v850 = ctc.selfAddress();
  const v852 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)'],
    msg: 'in',
    who: 'Ride_start'
    });
  const v853 = stdlib.addressEq(v850, v796);
  const v854 = stdlib.addressEq(v850, v823);
  const v855 = v853 ? true : v854;
  const v856 = stdlib.addressEq(v850, v784);
  const v857 = v855 ? true : v856;
  stdlib.assert(v857, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)'],
    msg: 'not a participant',
    who: 'Ride_start'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v784, v796, v797, v801, v802, v808, v823, v830, v831, v832, v852],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:190:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v868], secs: v870, time: v869, didSend: v274, from: v867 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Ride_start"
        });
      const v872 = stdlib.addressEq(v867, v796);
      const v873 = stdlib.addressEq(v867, v823);
      ;
      const v884 = null;
      const v885 = await txn1.getOutput('Ride_start', 'v884', ctc4, v884);
      
      if (v872) {
        const v1875 = v830;
        const v1876 = true;
        const v1877 = v832;
        const v1881 = v832 ? false : true;
        const v1882 = v830 ? false : v1881;
        if (v1882) {
          sim_r.isHalt = false;
          }
        else {
          if (v830) {
            null;
            const v1943 = false;
            const v1944 = false;
            const v1945 = false;
            const v1946 = false;
            const v1947 = false;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v796,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v823,
              tok: undefined /* Nothing */
              });
            const v1942 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        if (v873) {
          const v1984 = true;
          const v1985 = v831;
          const v1986 = v832;
          const v1990 = v832 ? false : true;
          const v1991 = v831 ? false : v1990;
          if (v1991) {
            sim_r.isHalt = false;
            }
          else {
            if (v831) {
              null;
              const v2052 = false;
              const v2053 = false;
              const v2054 = false;
              const v2055 = false;
              const v2056 = false;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v796,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v823,
                tok: undefined /* Nothing */
                });
              const v2051 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          null;
          const v2093 = v830;
          const v2094 = v831;
          const v2095 = true;
          const v2097 = v830 ? false : true;
          const v2098 = v831 ? v2097 : true;
          const v2100 = v2098 ? false : false;
          if (v2100) {
            sim_r.isHalt = false;
            }
          else {
            const v2101 = v831 ? v830 : false;
            if (v2101) {
              null;
              const v2161 = false;
              const v2162 = false;
              const v2163 = false;
              const v2164 = false;
              const v2165 = false;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v796,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v823,
                tok: undefined /* Nothing */
                });
              const v2160 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v868], secs: v870, time: v869, didSend: v274, from: v867 } = txn1;
  undefined /* setApiDetails */;
  const v872 = stdlib.addressEq(v867, v796);
  const v873 = stdlib.addressEq(v867, v823);
  const v874 = v872 ? true : v873;
  const v875 = stdlib.addressEq(v867, v784);
  const v876 = v874 ? true : v875;
  stdlib.assert(v876, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)'],
    msg: 'not a participant',
    who: 'Ride_start'
    });
  ;
  const v884 = null;
  const v885 = await txn1.getOutput('Ride_start', 'v884', ctc4, v884);
  if (v274) {
    stdlib.protect(ctc4, await interact.out(v868, v885), {
      at: './index.rsh:184:11:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)', 'at ./index.rsh:192:14:application call to "ret" (defined at: ./index.rsh:191:15:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
      msg: 'out',
      who: 'Ride_start'
      });
    }
  else {
    }
  
  if (v872) {
    const v1875 = v830;
    const v1876 = true;
    const v1877 = v832;
    const v1881 = v832 ? false : true;
    const v1882 = v830 ? false : v1881;
    if (v1882) {
      return;
      }
    else {
      if (v830) {
        null;
        const v1943 = false;
        const v1944 = false;
        const v1945 = false;
        const v1946 = false;
        const v1947 = false;
        return;
        }
      else {
        ;
        ;
        const v1942 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
        null;
        return;
        }}}
  else {
    if (v873) {
      const v1984 = true;
      const v1985 = v831;
      const v1986 = v832;
      const v1990 = v832 ? false : true;
      const v1991 = v831 ? false : v1990;
      if (v1991) {
        return;
        }
      else {
        if (v831) {
          null;
          const v2052 = false;
          const v2053 = false;
          const v2054 = false;
          const v2055 = false;
          const v2056 = false;
          return;
          }
        else {
          ;
          ;
          const v2051 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
          null;
          return;
          }}}
    else {
      null;
      const v2093 = v830;
      const v2094 = v831;
      const v2095 = true;
      const v2097 = v830 ? false : true;
      const v2098 = v831 ? v2097 : true;
      const v2100 = v2098 ? false : false;
      if (v2100) {
        return;
        }
      else {
        const v2101 = v831 ? v830 : false;
        if (v2101) {
          null;
          const v2161 = false;
          const v2162 = false;
          const v2163 = false;
          const v2164 = false;
          const v2165 = false;
          return;
          }
        else {
          ;
          ;
          const v2160 = stdlib.checkedBigNumberify('./index.rsh:211:57:decimal', stdlib.UInt_max, '0');
          null;
          return;
          }}}}
  
  
  };
export async function Ride_adminInterfereEnd(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Ride_adminInterfereEnd expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Ride_adminInterfereEnd expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Ride_adminInterfereEnd7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Ride_end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Ride_end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Ride_end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Ride_end7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Ride_start(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Ride_start expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Ride_start expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Ride_start9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Ride_adminInterfereEnd(byte,byte)void`, `Ride_end()void`, `Ride_start()void`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_2((uint64,uint64))void`, `_reachp_3((uint64))void`, `_reachp_6((uint64,(byte,byte[2])))void`, `_reachp_7((uint64,()))void`],
    pure: [],
    sigs: [`Ride_adminInterfereEnd(byte,byte)void`, `Ride_end()void`, `Ride_start()void`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_2((uint64,uint64))void`, `_reachp_3((uint64))void`, `_reachp_6((uint64,(byte,byte[2])))void`, `_reachp_7((uint64,()))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAAEIAkBIUFgHCRBkJgQAAQABAQT5+6/OMRhBBGYoZEkiWzUBJFs1AilkKmRQggkECh0mSQQpiWmVBEoBk4oET87U9wRojpEIBJ0wFcAEpHE8lgTFVLc/BMjQULE2GgCOCQPvALIAoAPkAAED+gPFBAUD2QA2GgEXNhoCFzULNQwkryk0DBZRBwg0CxZRBwhQUFA1DSEINAESRElXACA1F0lXICA1FkkhBFs1FUkhBVs1FEkhBls1E0khB1s1EklXYCA1EUlXgAEXNRtJV4EBFzUaSVeCARc1GUlXgwEXNRhXhAEXNQw0DSJbNQ40DVcIAzUPgAR/NbnRNA4WUDQPULA0DogFSzQPIlWNAgOcA6ZC/2CACwAAAAAAAAAAAQAANQ1C/28krzULIQk0ARJESVcAIDUXSVcgIDUWSSEEWzUVSSEFWzUUSSEGWzUTSSEHWzUSSVdgIDURSVeAARc1EElXgQEXNQ9XggEXNQ40CyJbNQyABAzfnB00DBZQsDQMiATOMQA0FhI1GDEANBESNQw0GDQMETEANBcSEUQoNQuACAAAAAAAAAN0NAtQsDQLNQQ0GEEDDCMyBjUNNQ80DxQ0EBQRNA4UEEEDFyI1DjQXNBZQNBUWUDQUFlA0ExZQNBIWUDQRUDQQFlEHCFA0DxZRBwhQNA4WUQcIUIACAABQIQkyBjUCNQEpSwFXAH9nKkxXfwZnKDQBFjQCFlBnMRkiEkSIBHo0A0AACoAEFR98dTQEULAjQzEANBcSRCg1DoAIAAAAAAAAA/Q0DlCwNA41BCM0DVcBARc0DVcAARcyBjULNQw1GDUbNBkUNBoUETQbFBBBArwiNRs0FzQWUDQVFlA0FBZQNBMWUDQSFlA0EVA0GxZRBwhQNBoWUQcIUDQZFlEHCFA0GBZRBwhQNAwWUQcIUCEIMgZC/0gxADQWEkk1DjEANBESEUQoNQ2ACAAAAAAAAAQ+NA1QsDQNNQQ0DkEB0yMyBjULNRlC/3oxADUXNA0iWzUONA0kWzULNA0hCls1DIAE93ETTTQOFlA0CxZQNAwWULA0DogDMjQXNAsWUDQMFlCBVa9QIzIGQv7SMQA1FiM0ARJESVcAIDUXSYEgWzULgShbNQw0DSJbNQ40DSRbNRWABMe2CtU0DhZQNBUWULA0DogC5DQVNAwLIQsKNRQ0FTQUCEk1E4gC2TQVNAsLIQsKNRIyBoHoBwg1GDQXNBZQNBUWUDQUFlA0ExZQNBIWUDQYFlCBHa9QJTIGQv5OMQA1ESU0ARJEiAK0NAsiWzUMgATzLQoMNAwWUDQLVwgIULA0DIgCcjIGNBgMRDQUiAJxIiIiMgY1DTUONQ81EEL9xCU0ARJEiAJ1NAsXNQyABNQMbNY0DBZQsDQMiAI6MgY0GA9ENBM0FogCJTEZgQUSRIgCdCIyCjIJiAJ4Qv3viAISgaCNBjQGCDUGNhoBNQ1C/qSIAf42GgE1DUL+3IgB8zYaATULQv9ViAHoNhoBNQtC/42IAd02GgE1DUL8HIgB0jYaATULQvymIjE0EkSBAzE1EkQiMTYSRCIxNxJEiAGygYUBryIiQv1hMRkiEkRC/YA0D1cBAjUNQv2CQv4EIzIGNQs1GkL9pzQMQQAKIzIGNQ01EEL87IAE8uuGELAjMgY1DTUOQvzbNA80EBBBACeABLspLiI0FlA0EVA0FRZQsCIiIiIiNA01CzUMNRg1GTUaNRtC/Vg0EzQWiAEwNBQ0EYgBKSI1Cys0ExZQNBQWUDQLFlCwQv7wNBk0GhBBAFo0EhY0EzQSCRZQNBQWUDULNAshCls1DjQLJFs1DTQLIls1DDQONA0INAwINBUlNBQLCBJENA00EYgA0jQONBaIAMs0DDQXiADEKzQOFlA0DRZQNAwWULBC/o40GUEAFjQSNBQIFjQVNBIJFlA0FBZQNQtC/5s0GkEAHTQMNBgQQQA0NBI0FAgWNBM0EgkWUCSvUDULQv/bNAw0GBBBADg0EiU0FAsIFjQVNBIJFlAkr1A1C0L/3iSvNBQWUDQTFlA0FBYkr1A0ExZQNAwUNBgUEE01C0L/vSU0FAsWJK9QNBUWUDULQv/LIrIBI7IQsgeyCLOJSIlMCUk1BjIJiAANiQlJQf/uSTUGiAATibFC/9cjNQOJSSISTDQCEhFEiTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJVwAgNRdJVyAgNRZJIQRbNRVJIQVbNRRJIQZbNRNJIQdbNRKBYFs1GIk0BjQHSg9B/4hC/5CxsglC/3E=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `23`,
    1000: `572`,
    1001: `572`,
    1002: `573`,
    1003: `573`,
    1004: `573`,
    1005: `576`,
    1006: `577`,
    1007: `578`,
    1008: `579`,
    1009: `579`,
    101: `23`,
    1010: `580`,
    1011: `580`,
    1012: `581`,
    1013: `581`,
    1014: `582`,
    1015: `582`,
    1016: `583`,
    1017: `583`,
    1018: `584`,
    1019: `584`,
    102: `23`,
    1020: `584`,
    1021: `586`,
    1022: `587`,
    1023: `587`,
    1024: `588`,
    1025: `589`,
    1026: `590`,
    1027: `590`,
    1028: `590`,
    1029: `591`,
    103: `23`,
    1030: `591`,
    1031: `592`,
    1032: `593`,
    1033: `593`,
    1034: `594`,
    1035: `594`,
    1036: `594`,
    1037: `594`,
    1038: `594`,
    1039: `594`,
    104: `23`,
    1040: `595`,
    1041: `595`,
    1042: `596`,
    1043: `597`,
    1044: `598`,
    1045: `600`,
    1046: `600`,
    1047: `601`,
    1048: `601`,
    1049: `601`,
    105: `23`,
    1050: `602`,
    1051: `602`,
    1052: `603`,
    1053: `603`,
    1054: `604`,
    1055: `605`,
    1056: `606`,
    1057: `606`,
    1058: `608`,
    1059: `608`,
    106: `23`,
    1060: `609`,
    1061: `609`,
    1062: `609`,
    1063: `611`,
    1064: `611`,
    1065: `612`,
    1066: `612`,
    1067: `613`,
    1068: `614`,
    1069: `616`,
    107: `23`,
    1070: `616`,
    1071: `616`,
    1072: `618`,
    1073: `619`,
    1074: `619`,
    1075: `620`,
    1076: `620`,
    1077: `621`,
    1078: `621`,
    1079: `621`,
    108: `23`,
    1080: `622`,
    1081: `622`,
    1082: `622`,
    1083: `624`,
    1084: `624`,
    1085: `624`,
    1086: `625`,
    1087: `625`,
    1088: `625`,
    1089: `625`,
    109: `23`,
    1090: `627`,
    1091: `627`,
    1092: `628`,
    1093: `629`,
    1094: `629`,
    1095: `630`,
    1096: `630`,
    1097: `630`,
    1098: `631`,
    1099: `631`,
    11: `2`,
    110: `23`,
    1100: `632`,
    1101: `632`,
    1102: `632`,
    1103: `634`,
    1104: `634`,
    1105: `634`,
    1106: `635`,
    1107: `635`,
    1108: `635`,
    1109: `636`,
    111: `23`,
    1110: `636`,
    1111: `637`,
    1112: `637`,
    1113: `637`,
    1114: `639`,
    1115: `639`,
    1116: `639`,
    1117: `640`,
    1118: `640`,
    1119: `640`,
    112: `23`,
    1120: `641`,
    1121: `641`,
    1122: `642`,
    1123: `642`,
    1124: `642`,
    1125: `644`,
    1126: `644`,
    1127: `644`,
    1128: `645`,
    1129: `645`,
    113: `23`,
    1130: `645`,
    1131: `646`,
    1132: `646`,
    1133: `647`,
    1134: `647`,
    1135: `647`,
    1136: `649`,
    1137: `649`,
    1138: `649`,
    1139: `650`,
    114: `23`,
    1140: `650`,
    1141: `650`,
    1142: `651`,
    1143: `651`,
    1144: `652`,
    1145: `652`,
    1146: `652`,
    1147: `654`,
    1148: `654`,
    1149: `654`,
    115: `23`,
    1150: `655`,
    1151: `655`,
    1152: `655`,
    1153: `656`,
    1154: `656`,
    1155: `657`,
    1156: `657`,
    1157: `657`,
    1158: `659`,
    1159: `660`,
    116: `23`,
    1160: `660`,
    1161: `661`,
    1162: `662`,
    1163: `663`,
    1164: `663`,
    1165: `664`,
    1166: `664`,
    1167: `665`,
    1168: `666`,
    1169: `667`,
    117: `23`,
    1170: `668`,
    1171: `668`,
    1172: `669`,
    1173: `670`,
    1174: `671`,
    1175: `672`,
    1176: `672`,
    1177: `673`,
    1178: `674`,
    1179: `675`,
    118: `25`,
    1180: `675`,
    1181: `675`,
    1182: `676`,
    1183: `676`,
    1184: `676`,
    1185: `677`,
    1186: `678`,
    1187: `679`,
    1188: `680`,
    1189: `680`,
    119: `27`,
    1190: `680`,
    1191: `682`,
    1192: `682`,
    1193: `683`,
    1194: `684`,
    1195: `685`,
    1196: `687`,
    1197: `687`,
    1198: `687`,
    1199: `689`,
    12: `2`,
    120: `27`,
    1200: `689`,
    1201: `690`,
    1202: `690`,
    1203: `690`,
    1204: `691`,
    1205: `691`,
    1206: `692`,
    1207: `692`,
    1208: `692`,
    1209: `694`,
    121: `27`,
    1210: `694`,
    1211: `694`,
    1212: `696`,
    1213: `697`,
    1214: `697`,
    1215: `698`,
    1216: `698`,
    1217: `699`,
    1218: `699`,
    1219: `700`,
    122: `28`,
    1220: `700`,
    1221: `700`,
    1222: `702`,
    1223: `702`,
    1224: `703`,
    1225: `703`,
    1226: `703`,
    1227: `704`,
    1228: `705`,
    1229: `705`,
    123: `29`,
    1230: `706`,
    1231: `706`,
    1232: `707`,
    1233: `707`,
    1234: `708`,
    1235: `708`,
    1236: `708`,
    1237: `710`,
    1238: `710`,
    1239: `710`,
    124: `29`,
    1240: `710`,
    1241: `710`,
    1242: `710`,
    1243: `711`,
    1244: `713`,
    1245: `714`,
    1246: `714`,
    1247: `715`,
    1248: `715`,
    1249: `716`,
    125: `29`,
    1250: `716`,
    1251: `717`,
    1252: `717`,
    1253: `717`,
    1254: `719`,
    1255: `719`,
    1256: `720`,
    1257: `720`,
    1258: `721`,
    1259: `722`,
    126: `30`,
    1260: `722`,
    1261: `722`,
    1262: `723`,
    1263: `723`,
    1264: `723`,
    1265: `723`,
    1266: `723`,
    1267: `723`,
    1268: `724`,
    1269: `724`,
    127: `31`,
    1270: `725`,
    1271: `726`,
    1272: `726`,
    1273: `727`,
    1274: `728`,
    1275: `728`,
    1276: `729`,
    1277: `730`,
    1278: `731`,
    1279: `733`,
    128: `31`,
    1280: `734`,
    1281: `735`,
    1282: `736`,
    1283: `737`,
    1284: `738`,
    1285: `738`,
    1286: `739`,
    1287: `739`,
    1288: `740`,
    1289: `740`,
    129: `32`,
    1290: `741`,
    1291: `741`,
    1292: `742`,
    1293: `742`,
    1294: `743`,
    1295: `743`,
    1296: `744`,
    1297: `744`,
    1298: `745`,
    1299: `745`,
    13: `2`,
    130: `32`,
    1300: `745`,
    1301: `747`,
    1302: `747`,
    1303: `749`,
    1304: `749`,
    1305: `750`,
    1306: `750`,
    1307: `750`,
    1308: `751`,
    1309: `751`,
    131: `34`,
    1310: `753`,
    1311: `753`,
    1312: `754`,
    1313: `754`,
    1314: `754`,
    1315: `755`,
    1316: `756`,
    1317: `756`,
    1318: `757`,
    1319: `758`,
    132: `35`,
    1320: `758`,
    1321: `759`,
    1322: `760`,
    1323: `761`,
    1324: `761`,
    1325: `762`,
    1326: `763`,
    1327: `764`,
    1328: `764`,
    1329: `765`,
    133: `36`,
    1330: `766`,
    1331: `767`,
    1332: `769`,
    1333: `769`,
    1334: `769`,
    1335: `771`,
    1336: `771`,
    1337: `772`,
    1338: `772`,
    1339: `773`,
    134: `37`,
    1340: `774`,
    1341: `774`,
    1342: `774`,
    1343: `775`,
    1344: `775`,
    1345: `776`,
    1346: `777`,
    1347: `777`,
    1348: `778`,
    1349: `778`,
    135: `37`,
    1350: `779`,
    1351: `780`,
    1352: `781`,
    1353: `782`,
    1354: `782`,
    1355: `783`,
    1356: `784`,
    1357: `785`,
    1358: `785`,
    1359: `787`,
    136: `38`,
    1360: `787`,
    1361: `788`,
    1362: `788`,
    1363: `789`,
    1364: `790`,
    1365: `790`,
    1366: `791`,
    1367: `791`,
    1368: `792`,
    1369: `793`,
    137: `39`,
    1370: `794`,
    1371: `794`,
    1372: `795`,
    1373: `795`,
    1374: `796`,
    1375: `797`,
    1376: `798`,
    1377: `798`,
    1378: `799`,
    1379: `799`,
    138: `39`,
    1380: `800`,
    1381: `800`,
    1382: `801`,
    1383: `802`,
    1384: `802`,
    1385: `803`,
    1386: `804`,
    1387: `804`,
    1388: `805`,
    1389: `806`,
    139: `39`,
    1390: `806`,
    1391: `807`,
    1392: `808`,
    1393: `809`,
    1394: `810`,
    1395: `814`,
    1396: `814`,
    1397: `816`,
    1398: `816`,
    1399: `817`,
    14: `2`,
    140: `40`,
    1400: `817`,
    1401: `817`,
    1402: `818`,
    1403: `818`,
    1404: `820`,
    1405: `820`,
    1406: `821`,
    1407: `821`,
    1408: `821`,
    1409: `822`,
    141: `40`,
    1410: `822`,
    1411: `824`,
    1412: `824`,
    1413: `825`,
    1414: `825`,
    1415: `825`,
    1416: `826`,
    1417: `827`,
    1418: `827`,
    1419: `828`,
    142: `41`,
    1420: `829`,
    1421: `830`,
    1422: `830`,
    1423: `831`,
    1424: `832`,
    1425: `833`,
    1426: `833`,
    1427: `834`,
    1428: `835`,
    1429: `836`,
    143: `42`,
    1430: `838`,
    1431: `838`,
    1432: `838`,
    1433: `840`,
    1434: `840`,
    1435: `841`,
    1436: `841`,
    1437: `841`,
    1438: `842`,
    1439: `842`,
    144: `42`,
    1440: `843`,
    1441: `843`,
    1442: `844`,
    1443: `845`,
    1444: `846`,
    1445: `846`,
    1446: `847`,
    1447: `847`,
    1448: `848`,
    1449: `849`,
    145: `42`,
    1450: `850`,
    1451: `851`,
    1452: `851`,
    1453: `852`,
    1454: `853`,
    1455: `854`,
    1456: `854`,
    1457: `856`,
    1458: `856`,
    1459: `856`,
    146: `43`,
    1460: `858`,
    1461: `858`,
    1462: `859`,
    1463: `859`,
    1464: `859`,
    1465: `860`,
    1466: `860`,
    1467: `861`,
    1468: `861`,
    1469: `862`,
    147: `44`,
    1470: `863`,
    1471: `863`,
    1472: `863`,
    1473: `864`,
    1474: `864`,
    1475: `865`,
    1476: `865`,
    1477: `866`,
    1478: `867`,
    1479: `868`,
    148: `45`,
    1480: `868`,
    1481: `869`,
    1482: `869`,
    1483: `870`,
    1484: `871`,
    1485: `872`,
    1486: `873`,
    1487: `874`,
    1488: `875`,
    1489: `876`,
    149: `46`,
    1490: `876`,
    1491: `879`,
    1492: `879`,
    1493: `879`,
    1494: `881`,
    1495: `881`,
    1496: `882`,
    1497: `882`,
    1498: `883`,
    1499: `884`,
    15: `2`,
    150: `46`,
    1500: `884`,
    1501: `884`,
    1502: `885`,
    1503: `885`,
    1504: `886`,
    1505: `887`,
    1506: `887`,
    1507: `888`,
    1508: `889`,
    1509: `890`,
    151: `48`,
    1510: `891`,
    1511: `891`,
    1512: `892`,
    1513: `892`,
    1514: `893`,
    1515: `894`,
    1516: `895`,
    1517: `896`,
    1518: `897`,
    1519: `898`,
    152: `48`,
    1520: `899`,
    1521: `899`,
    1522: `901`,
    1523: `901`,
    1524: `901`,
    1525: `903`,
    1526: `904`,
    1527: `905`,
    1528: `905`,
    1529: `906`,
    153: `49`,
    1530: `907`,
    1531: `908`,
    1532: `908`,
    1533: `909`,
    1534: `910`,
    1535: `911`,
    1536: `911`,
    1537: `912`,
    1538: `913`,
    1539: `914`,
    154: `49`,
    1540: `915`,
    1541: `916`,
    1542: `916`,
    1543: `917`,
    1544: `918`,
    1545: `919`,
    1546: `919`,
    1547: `920`,
    1548: `921`,
    1549: `921`,
    155: `50`,
    1550: `922`,
    1551: `923`,
    1552: `924`,
    1553: `925`,
    1554: `925`,
    1555: `926`,
    1556: `926`,
    1557: `926`,
    1558: `928`,
    1559: `929`,
    156: `51`,
    1560: `929`,
    1561: `930`,
    1562: `931`,
    1563: `932`,
    1564: `933`,
    1565: `934`,
    1566: `935`,
    1567: `935`,
    1568: `936`,
    1569: `937`,
    157: `53`,
    1570: `938`,
    1571: `938`,
    1572: `939`,
    1573: `939`,
    1574: `939`,
    1575: `941`,
    1576: `942`,
    1577: `942`,
    1578: `943`,
    1579: `944`,
    158: `54`,
    1580: `944`,
    1581: `945`,
    1582: `945`,
    1583: `946`,
    1584: `946`,
    1585: `947`,
    1586: `948`,
    1587: `950`,
    1588: `951`,
    1589: `953`,
    159: `54`,
    1590: `954`,
    1591: `955`,
    1592: `956`,
    1593: `956`,
    1594: `957`,
    1595: `957`,
    1596: `958`,
    1597: `958`,
    1598: `958`,
    1599: `959`,
    16: `2`,
    160: `54`,
    1600: `961`,
    1601: `962`,
    1602: `963`,
    1603: `963`,
    1604: `963`,
    1605: `964`,
    1606: `965`,
    1607: `965`,
    1608: `966`,
    1609: `966`,
    161: `55`,
    1610: `966`,
    1611: `967`,
    1612: `969`,
    1613: `970`,
    1614: `970`,
    1615: `970`,
    1616: `972`,
    1617: `973`,
    1618: `973`,
    1619: `974`,
    162: `55`,
    1620: `976`,
    1621: `977`,
    1622: `978`,
    1623: `979`,
    1624: `980`,
    1625: `980`,
    1626: `981`,
    1627: `982`,
    1628: `983`,
    1629: `984`,
    163: `56`,
    1630: `987`,
    1631: `987`,
    1632: `988`,
    1633: `988`,
    1634: `989`,
    1635: `990`,
    1636: `991`,
    1637: `992`,
    1638: `992`,
    1639: `993`,
    164: `57`,
    1640: `994`,
    1641: `994`,
    1642: `995`,
    1643: `995`,
    1644: `996`,
    1645: `996`,
    1646: `997`,
    1647: `998`,
    1648: `999`,
    1649: `999`,
    165: `57`,
    1650: `1000`,
    1651: `1001`,
    1652: `1002`,
    1653: `1003`,
    1654: `1003`,
    1655: `1004`,
    1656: `1005`,
    1657: `1006`,
    1658: `1008`,
    1659: `1009`,
    166: `57`,
    1660: `1009`,
    1661: `1009`,
    1662: `1010`,
    1663: `1010`,
    1664: `1011`,
    1665: `1012`,
    1666: `1012`,
    1667: `1012`,
    1668: `1013`,
    1669: `1013`,
    167: `58`,
    1670: `1014`,
    1671: `1015`,
    1672: `1015`,
    1673: `1016`,
    1674: `1017`,
    1675: `1017`,
    1676: `1018`,
    1677: `1019`,
    1678: `1019`,
    1679: `1020`,
    168: `58`,
    1680: `1021`,
    1681: `1021`,
    1682: `1022`,
    1683: `1023`,
    1684: `1023`,
    1685: `1024`,
    1686: `1025`,
    1687: `1025`,
    1688: `1026`,
    1689: `1027`,
    169: `59`,
    1690: `1027`,
    1691: `1028`,
    1692: `1029`,
    1693: `1029`,
    1694: `1030`,
    1695: `1030`,
    1696: `1031`,
    1697: `1032`,
    1698: `1032`,
    1699: `1033`,
    17: `2`,
    170: `60`,
    1700: `1035`,
    1701: `1035`,
    1702: `1036`,
    1703: `1036`,
    1704: `1037`,
    1705: `1038`,
    1706: `1039`,
    1707: `1039`,
    1708: `1039`,
    1709: `1040`,
    171: `60`,
    1710: `1040`,
    1711: `1040`,
    1712: `1042`,
    1713: `1043`,
    1714: `1043`,
    1715: `1044`,
    172: `61`,
    173: `62`,
    174: `62`,
    175: `63`,
    176: `64`,
    177: `64`,
    178: `65`,
    179: `66`,
    18: `2`,
    180: `66`,
    181: `67`,
    182: `68`,
    183: `68`,
    184: `69`,
    185: `70`,
    186: `70`,
    187: `71`,
    188: `72`,
    189: `72`,
    19: `2`,
    190: `73`,
    191: `74`,
    192: `74`,
    193: `75`,
    194: `76`,
    195: `76`,
    196: `76`,
    197: `77`,
    198: `77`,
    199: `78`,
    2: `2`,
    20: `2`,
    200: `79`,
    201: `79`,
    202: `79`,
    203: `80`,
    204: `81`,
    205: `81`,
    206: `82`,
    207: `83`,
    208: `83`,
    209: `83`,
    21: `2`,
    210: `84`,
    211: `85`,
    212: `85`,
    213: `86`,
    214: `87`,
    215: `87`,
    216: `87`,
    217: `88`,
    218: `89`,
    219: `89`,
    22: `2`,
    220: `90`,
    221: `91`,
    222: `91`,
    223: `91`,
    224: `92`,
    225: `93`,
    226: `93`,
    227: `94`,
    228: `94`,
    229: `94`,
    23: `2`,
    230: `95`,
    231: `96`,
    232: `96`,
    233: `97`,
    234: `97`,
    235: `98`,
    236: `99`,
    237: `100`,
    238: `100`,
    239: `101`,
    24: `2`,
    240: `101`,
    241: `102`,
    242: `102`,
    243: `102`,
    244: `103`,
    245: `103`,
    246: `104`,
    247: `104`,
    248: `104`,
    249: `104`,
    25: `2`,
    250: `104`,
    251: `104`,
    252: `105`,
    253: `105`,
    254: `106`,
    255: `107`,
    256: `108`,
    257: `108`,
    258: `109`,
    259: `110`,
    26: `2`,
    260: `112`,
    261: `112`,
    262: `113`,
    263: `113`,
    264: `113`,
    265: `114`,
    266: `114`,
    267: `115`,
    268: `116`,
    269: `117`,
    27: `4`,
    270: `117`,
    271: `117`,
    272: `117`,
    273: `117`,
    274: `117`,
    275: `118`,
    276: `118`,
    277: `118`,
    278: `121`,
    279: `121`,
    28: `4`,
    280: `121`,
    281: `121`,
    282: `121`,
    283: `121`,
    284: `121`,
    285: `121`,
    286: `121`,
    287: `121`,
    288: `121`,
    289: `121`,
    29: `5`,
    290: `121`,
    291: `122`,
    292: `122`,
    293: `123`,
    294: `123`,
    295: `123`,
    296: `126`,
    297: `127`,
    298: `128`,
    299: `128`,
    3: `2`,
    30: `5`,
    300: `130`,
    301: `130`,
    302: `131`,
    303: `131`,
    304: `132`,
    305: `133`,
    306: `135`,
    307: `136`,
    308: `136`,
    309: `136`,
    31: `5`,
    310: `137`,
    311: `137`,
    312: `138`,
    313: `139`,
    314: `139`,
    315: `139`,
    316: `140`,
    317: `140`,
    318: `141`,
    319: `142`,
    32: `6`,
    320: `142`,
    321: `143`,
    322: `144`,
    323: `144`,
    324: `145`,
    325: `146`,
    326: `146`,
    327: `147`,
    328: `148`,
    329: `148`,
    33: `7`,
    330: `149`,
    331: `150`,
    332: `150`,
    333: `151`,
    334: `152`,
    335: `152`,
    336: `153`,
    337: `154`,
    338: `154`,
    339: `155`,
    34: `8`,
    340: `156`,
    341: `156`,
    342: `157`,
    343: `158`,
    344: `158`,
    345: `158`,
    346: `159`,
    347: `159`,
    348: `160`,
    349: `161`,
    35: `9`,
    350: `161`,
    351: `161`,
    352: `162`,
    353: `163`,
    354: `163`,
    355: `164`,
    356: `165`,
    357: `165`,
    358: `165`,
    359: `166`,
    36: `10`,
    360: `167`,
    361: `167`,
    362: `168`,
    363: `168`,
    364: `168`,
    365: `169`,
    366: `170`,
    367: `170`,
    368: `171`,
    369: `171`,
    37: `11`,
    370: `172`,
    371: `173`,
    372: `174`,
    373: `174`,
    374: `175`,
    375: `175`,
    376: `175`,
    377: `175`,
    378: `175`,
    379: `175`,
    38: `11`,
    380: `176`,
    381: `176`,
    382: `177`,
    383: `178`,
    384: `179`,
    385: `181`,
    386: `181`,
    387: `182`,
    388: `182`,
    389: `182`,
    39: `12`,
    390: `184`,
    391: `184`,
    392: `185`,
    393: `185`,
    394: `186`,
    395: `187`,
    396: `187`,
    397: `188`,
    398: `188`,
    399: `189`,
    4: `2`,
    40: `13`,
    400: `189`,
    401: `190`,
    402: `191`,
    403: `191`,
    404: `192`,
    405: `192`,
    406: `193`,
    407: `193`,
    408: `194`,
    409: `195`,
    41: `14`,
    410: `195`,
    411: `196`,
    412: `196`,
    413: `197`,
    414: `198`,
    415: `199`,
    416: `205`,
    417: `206`,
    418: `206`,
    419: `207`,
    42: `14`,
    420: `207`,
    421: `207`,
    422: `207`,
    423: `207`,
    424: `207`,
    425: `207`,
    426: `207`,
    427: `207`,
    428: `207`,
    429: `208`,
    43: `15`,
    430: `208`,
    431: `209`,
    432: `210`,
    433: `211`,
    434: `211`,
    435: `212`,
    436: `212`,
    437: `213`,
    438: `213`,
    439: `214`,
    44: `16`,
    440: `214`,
    441: `214`,
    442: `215`,
    443: `216`,
    444: `216`,
    445: `217`,
    446: `217`,
    447: `218`,
    448: `218`,
    449: `220`,
    45: `17`,
    450: `220`,
    451: `221`,
    452: `222`,
    453: `222`,
    454: `223`,
    455: `224`,
    456: `225`,
    457: `225`,
    458: `226`,
    459: `227`,
    46: `18`,
    460: `228`,
    461: `228`,
    462: `228`,
    463: `229`,
    464: `230`,
    465: `230`,
    466: `232`,
    467: `232`,
    468: `233`,
    469: `233`,
    47: `19`,
    470: `234`,
    471: `235`,
    472: `235`,
    473: `236`,
    474: `237`,
    475: `238`,
    476: `238`,
    477: `239`,
    478: `240`,
    479: `241`,
    48: `21`,
    480: `241`,
    481: `242`,
    482: `243`,
    483: `244`,
    484: `244`,
    485: `245`,
    486: `246`,
    487: `247`,
    488: `247`,
    489: `248`,
    49: `21`,
    490: `249`,
    491: `249`,
    492: `250`,
    493: `251`,
    494: `251`,
    495: `251`,
    496: `252`,
    497: `253`,
    498: `253`,
    499: `254`,
    5: `2`,
    50: `21`,
    500: `255`,
    501: `255`,
    502: `255`,
    503: `256`,
    504: `257`,
    505: `257`,
    506: `258`,
    507: `259`,
    508: `259`,
    509: `259`,
    51: `21`,
    510: `260`,
    511: `261`,
    512: `261`,
    513: `261`,
    514: `261`,
    515: `262`,
    516: `263`,
    517: `263`,
    518: `264`,
    519: `264`,
    52: `21`,
    520: `266`,
    521: `266`,
    522: `267`,
    523: `267`,
    524: `268`,
    525: `269`,
    526: `269`,
    527: `270`,
    528: `270`,
    529: `270`,
    53: `21`,
    530: `271`,
    531: `272`,
    532: `273`,
    533: `274`,
    534: `274`,
    535: `274`,
    536: `275`,
    537: `276`,
    538: `277`,
    539: `277`,
    54: `21`,
    540: `278`,
    541: `279`,
    542: `279`,
    543: `280`,
    544: `281`,
    545: `282`,
    546: `283`,
    547: `283`,
    548: `284`,
    549: `285`,
    55: `21`,
    550: `286`,
    551: `288`,
    552: `288`,
    553: `288`,
    554: `290`,
    555: `290`,
    556: `291`,
    557: `291`,
    558: `291`,
    559: `293`,
    56: `21`,
    560: `293`,
    561: `293`,
    562: `293`,
    563: `293`,
    564: `293`,
    565: `294`,
    566: `294`,
    567: `295`,
    568: `296`,
    569: `298`,
    57: `21`,
    570: `299`,
    571: `301`,
    572: `301`,
    573: `302`,
    574: `302`,
    575: `303`,
    576: `304`,
    577: `311`,
    578: `312`,
    579: `312`,
    58: `21`,
    580: `313`,
    581: `313`,
    582: `313`,
    583: `313`,
    584: `313`,
    585: `313`,
    586: `313`,
    587: `313`,
    588: `313`,
    589: `313`,
    59: `21`,
    590: `314`,
    591: `314`,
    592: `315`,
    593: `316`,
    594: `317`,
    595: `317`,
    596: `318`,
    597: `318`,
    598: `319`,
    599: `320`,
    6: `2`,
    60: `21`,
    600: `320`,
    601: `321`,
    602: `321`,
    603: `321`,
    604: `322`,
    605: `323`,
    606: `323`,
    607: `324`,
    608: `324`,
    609: `324`,
    61: `21`,
    610: `325`,
    611: `326`,
    612: `326`,
    613: `327`,
    614: `327`,
    615: `328`,
    616: `328`,
    617: `329`,
    618: `329`,
    619: `330`,
    62: `21`,
    620: `330`,
    621: `332`,
    622: `332`,
    623: `333`,
    624: `334`,
    625: `334`,
    626: `335`,
    627: `336`,
    628: `337`,
    629: `337`,
    63: `21`,
    630: `338`,
    631: `339`,
    632: `340`,
    633: `340`,
    634: `340`,
    635: `341`,
    636: `342`,
    637: `342`,
    638: `344`,
    639: `344`,
    64: `21`,
    640: `345`,
    641: `345`,
    642: `346`,
    643: `347`,
    644: `347`,
    645: `348`,
    646: `349`,
    647: `350`,
    648: `350`,
    649: `351`,
    65: `21`,
    650: `352`,
    651: `353`,
    652: `353`,
    653: `354`,
    654: `355`,
    655: `356`,
    656: `356`,
    657: `357`,
    658: `358`,
    659: `359`,
    66: `21`,
    660: `359`,
    661: `360`,
    662: `361`,
    663: `361`,
    664: `362`,
    665: `363`,
    666: `363`,
    667: `363`,
    668: `364`,
    669: `365`,
    67: `21`,
    670: `365`,
    671: `366`,
    672: `367`,
    673: `367`,
    674: `367`,
    675: `368`,
    676: `369`,
    677: `369`,
    678: `370`,
    679: `371`,
    68: `21`,
    680: `371`,
    681: `371`,
    682: `372`,
    683: `373`,
    684: `373`,
    685: `374`,
    686: `375`,
    687: `375`,
    688: `375`,
    689: `376`,
    69: `21`,
    690: `377`,
    691: `377`,
    692: `378`,
    693: `379`,
    694: `379`,
    695: `379`,
    696: `380`,
    697: `381`,
    698: `381`,
    699: `382`,
    7: `2`,
    70: `21`,
    700: `382`,
    701: `383`,
    702: `383`,
    703: `383`,
    704: `385`,
    705: `385`,
    706: `386`,
    707: `386`,
    708: `387`,
    709: `388`,
    71: `21`,
    710: `389`,
    711: `389`,
    712: `390`,
    713: `390`,
    714: `391`,
    715: `391`,
    716: `392`,
    717: `393`,
    718: `394`,
    719: `401`,
    72: `21`,
    720: `402`,
    721: `402`,
    722: `403`,
    723: `403`,
    724: `403`,
    725: `403`,
    726: `403`,
    727: `403`,
    728: `403`,
    729: `403`,
    73: `21`,
    730: `403`,
    731: `403`,
    732: `404`,
    733: `404`,
    734: `405`,
    735: `406`,
    736: `407`,
    737: `407`,
    738: `408`,
    739: `408`,
    74: `21`,
    740: `409`,
    741: `409`,
    742: `410`,
    743: `410`,
    744: `410`,
    745: `411`,
    746: `412`,
    747: `412`,
    748: `413`,
    749: `413`,
    75: `21`,
    750: `414`,
    751: `414`,
    752: `415`,
    753: `415`,
    754: `415`,
    755: `417`,
    756: `417`,
    757: `418`,
    758: `418`,
    759: `419`,
    76: `21`,
    760: `419`,
    761: `420`,
    762: `421`,
    763: `422`,
    764: `422`,
    765: `423`,
    766: `423`,
    767: `424`,
    768: `425`,
    769: `426`,
    77: `21`,
    770: `426`,
    771: `427`,
    772: `427`,
    773: `428`,
    774: `428`,
    775: `429`,
    776: `430`,
    777: `430`,
    778: `431`,
    779: `431`,
    78: `21`,
    780: `431`,
    781: `431`,
    782: `431`,
    783: `431`,
    784: `432`,
    785: `432`,
    786: `433`,
    787: `434`,
    788: `435`,
    789: `435`,
    79: `21`,
    790: `436`,
    791: `437`,
    792: `438`,
    793: `438`,
    794: `439`,
    795: `440`,
    796: `441`,
    797: `443`,
    798: `443`,
    799: `444`,
    8: `2`,
    80: `21`,
    800: `444`,
    801: `444`,
    802: `446`,
    803: `446`,
    804: `447`,
    805: `447`,
    806: `448`,
    807: `449`,
    808: `450`,
    809: `450`,
    81: `21`,
    810: `451`,
    811: `452`,
    812: `453`,
    813: `453`,
    814: `454`,
    815: `455`,
    816: `456`,
    817: `457`,
    818: `457`,
    819: `458`,
    82: `21`,
    820: `458`,
    821: `458`,
    822: `460`,
    823: `460`,
    824: `461`,
    825: `461`,
    826: `462`,
    827: `463`,
    828: `463`,
    829: `464`,
    83: `21`,
    830: `465`,
    831: `467`,
    832: `468`,
    833: `468`,
    834: `468`,
    835: `469`,
    836: `469`,
    837: `470`,
    838: `471`,
    839: `471`,
    84: `21`,
    840: `472`,
    841: `473`,
    842: `473`,
    843: `474`,
    844: `474`,
    845: `475`,
    846: `476`,
    847: `476`,
    848: `477`,
    849: `477`,
    85: `21`,
    850: `478`,
    851: `479`,
    852: `480`,
    853: `480`,
    854: `481`,
    855: `481`,
    856: `482`,
    857: `483`,
    858: `484`,
    859: `484`,
    86: `21`,
    860: `485`,
    861: `485`,
    862: `485`,
    863: `485`,
    864: `485`,
    865: `485`,
    866: `486`,
    867: `486`,
    868: `487`,
    869: `488`,
    87: `21`,
    870: `489`,
    871: `489`,
    872: `490`,
    873: `491`,
    874: `492`,
    875: `494`,
    876: `494`,
    877: `495`,
    878: `495`,
    879: `495`,
    88: `21`,
    880: `496`,
    881: `496`,
    882: `497`,
    883: `497`,
    884: `498`,
    885: `499`,
    886: `499`,
    887: `500`,
    888: `501`,
    889: `501`,
    89: `21`,
    890: `502`,
    891: `502`,
    892: `503`,
    893: `503`,
    894: `504`,
    895: `505`,
    896: `506`,
    897: `506`,
    898: `507`,
    899: `507`,
    9: `2`,
    90: `21`,
    900: `507`,
    901: `510`,
    902: `510`,
    903: `511`,
    904: `511`,
    905: `512`,
    906: `513`,
    907: `513`,
    908: `514`,
    909: `515`,
    91: `21`,
    910: `515`,
    911: `516`,
    912: `516`,
    913: `517`,
    914: `517`,
    915: `517`,
    916: `518`,
    917: `519`,
    918: `519`,
    919: `521`,
    92: `21`,
    920: `521`,
    921: `522`,
    922: `522`,
    923: `523`,
    924: `524`,
    925: `524`,
    926: `525`,
    927: `526`,
    928: `527`,
    929: `527`,
    93: `21`,
    930: `528`,
    931: `529`,
    932: `530`,
    933: `530`,
    934: `531`,
    935: `532`,
    936: `533`,
    937: `533`,
    938: `534`,
    939: `535`,
    94: `21`,
    940: `536`,
    941: `536`,
    942: `537`,
    943: `538`,
    944: `539`,
    945: `539`,
    946: `540`,
    947: `541`,
    948: `542`,
    949: `543`,
    95: `22`,
    950: `543`,
    951: `544`,
    952: `544`,
    953: `544`,
    954: `546`,
    955: `546`,
    956: `547`,
    957: `547`,
    958: `548`,
    959: `549`,
    96: `22`,
    960: `549`,
    961: `550`,
    962: `551`,
    963: `552`,
    964: `552`,
    965: `552`,
    966: `553`,
    967: `553`,
    968: `554`,
    969: `555`,
    97: `22`,
    970: `556`,
    971: `556`,
    972: `557`,
    973: `557`,
    974: `557`,
    975: `557`,
    976: `557`,
    977: `557`,
    978: `558`,
    979: `558`,
    98: `23`,
    980: `559`,
    981: `560`,
    982: `561`,
    983: `561`,
    984: `562`,
    985: `562`,
    986: `562`,
    987: `563`,
    988: `564`,
    989: `566`,
    99: `23`,
    990: `566`,
    991: `567`,
    992: `567`,
    993: `567`,
    994: `568`,
    995: `568`,
    996: `569`,
    997: `569`,
    998: `570`,
    999: `571`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 133,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T5","name":"v2219","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T0","name":"_Ride_adminInterfereEnd0_353","type":"tuple"},{"internalType":"bool","name":"_Ride_end0_353","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1012","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1086","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v884","type":"event"},{"anonymous":false,"inputs":[],"name":"adminInterfereOnStartRide","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"rideEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"rideStarted","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"bool","name":"v2208","type":"bool"},{"internalType":"bool","name":"v2209","type":"bool"}],"name":"Ride_adminInterfereEnd","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Ride_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Ride_start","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v2222","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v2225","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v2228","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T0","name":"_Ride_adminInterfereEnd0_353","type":"tuple"},{"internalType":"bool","name":"_Ride_end0_353","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v2231","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T4","name":"v2234","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620044529081380391601f1980601f85011683019360018060401b039284861084871117620003195781606092869260409889528339810103126200032f578351926200004e8462000334565b80518452602093858583015192868301938452015194868201958652436003558651916080830192808410878511176200031957606093895260009381858093528285820152828b820152015260049060ff82541662000302577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a1518015908115620002f5575b5015620002de5734620002c7578751966200010b8862000334565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117620002b45788528351958611620002a157600254908782811c9216801562000296575b83831014620002835750601f811162000237575b508093601f8611600114620001cf57505091839491849394620001c3575b50501b916000199060031b1c1916176002555b516141019081620003518239f35b015192503880620001a2565b600283528183209493928692918316915b888383106200021c575050501062000202575b505050811b01600255620001b5565b015160001960f88460031b161c19169055388080620001f3565b858701518855909601959485019487935090810190620001e0565b60028352818320601f870160051c81019183881062000278575b601f0160051c019087905b8281106200026c57505062000184565b8481550187906200025c565b909150819062000251565b634e487b7160e01b845260229052602483fd5b91607f169162000170565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000f0565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003195760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c806310bf126e14610c3657806313777274146108e35780631ac18d22146108975780631e93b0f11461087957806341712c0a146106f65780637bf0667f146102f85780637f784643146102be57806383230757146102a0578063980d20ef146101c6578063ab53f2c6146101525763b3a45e620361000e57604036600319011261014d5760043580151580910361014d576100b7610c85565b6100bf610e7b565b610141816040516100cf81610d1f565b602095869586830191835215158152604051906100eb82610d1f565b6040516100f781610d1f565b6000815260008882015282528682019261010f610eb0565b845251151582515251151586825101526000825152518582510152610132610ee2565b90600082525185820152610fb9565b01511515604051908152f35b600080fd5b3461014d57600036600319011261014d5760005461016e610dc6565b6040519182528160206040818301528251908160408401526000935b8285106101ad575050606092506000838284010152601f80199101168101030190f35b848101820151868601606001529381019385935061018a565b60a036600319011261014d576101da610e7b565b604051906101e782610d1f565b6004358252608036602319011261014d5760405191606083016001600160401b0381118482101761028a57604052602435600281101561014d578352604036604319011261014d5760405161023b81610d1f565b604435801515810361014d578152606435801515810361014d576020820152602084015260843592831515840361014d5761027f9360408201526020820152610fb9565b602060405160008152f35b634e487b7160e01b600052604160045260246000fd5b3461014d57600036600319011261014d576020600154604051908152f35b604036600319011261014d5761027f6102d5610e7b565b6040516102e181610d1f565b60043581526102ee610c85565b60208201526127b3565b604036600319011261014d5761030c610e7b565b5061031636613fcd565b600280600054036106dd5761033b61032c610dc6565b6020808251830101910161402c565b9160ff600454166106c4577f825a9ccfdfb1287f6bbf7f557926d7e91c3f46a7a55dbaa5b7e395530c27990f60405180610376843383614005565b0390a15180159081156106b8575b501561069f5760c08201514310156106865760608201918251340361066d5760a0906103ae61274f565b93600180841b038251168552600180841b0360208301511660208601526040820151604086015251606085015260808101516080850152015160a08301523360c0830152600060e0830152600061010083015260006101208301524361014083015261012060405161041f81610d72565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e0810151151561010085015261010081015115158285015201511515610140830152610140825261056482610daa565b81516001600160401b03811161028a5761057e8254610c94565b601f8111610630575b50602092601f82116001146105cc57928192936000926105c1575b50508160011b916000199060031b1c1916179055602060405160008152f35b0151905083806105a2565b601f198216938360005260206000209160005b86811061061857508360019596106105ff575b505050811b01905561027f565b015160001960f88460031b161c191690558380806105f2565b919260206001819286850151815501940192016105df565b61065d90836000526020600020601f840160051c81019160208510610663575b601f0160051c0190612600565b83610587565b9091508190610650565b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b90506001541483610384565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60208060031936011261014d5761070b610e7b565b5060405161071881610cce565b600435815260026000540361086057610740610732610dc6565b83808251830101910161402c565b9060ff60045416610847577fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e851560408051338152835186820152a151801590811561083b575b50156108225760c0810151431061080957346107f057600080808093608060018060a01b038783015116910151908282156107e7575bf1156107db576000805560006001556107d2612617565b60405160008152f35b6040513d6000823e3d90fd5b506108fc6107bb565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b90506001541483610785565b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b3461014d57600036600319011261014d576020600354604051908152f35b600036600319011261014d57602060406108af610e7b565b610141816108bb610ee2565b85810190600182515251151585825101526108d4610ee2565b90600082525186820152610fb9565b604036600319011261014d576108f7610e7b565b5061090136613fcd565b60405161090d81610d1f565b6000815260209182820190600082526001918260005403610c1d57610930610dc6565b9360608580518101031261014d576040519161094b83610ce9565b610956878701610f03565b835260606040870151968885019788520151936040840194855260ff60045416610c04577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a763924604051806109aa843383614005565b0390a180518015908115610bf9575b5015610be05760646109d5896109e09301968751905190612712565b04808452855161268f565b8082523403610bc757604051936109f685610d04565b60008552878501968794600086526064610a5a60408901936000855260608a01956000875260808b01976000895260a08c019960008b5260c08d019b60008d528d60018060a01b038099511690523390528251885251885251885251905190612712565b0485526103e84301804311610bb15743811061014d57865260029889600055438955816040519851168b890152511660408701525160608601525160808501525160a08401525160c08301525160e082015260e08152610ab981610d56565b8051906001600160401b03821161028a57610ad48454610c94565b601f8111610b81575b508490601f8311600114610b1e57928293918392600094610b13575b50501b916000199060031b1c191617905560405160008152f35b015192508680610af9565b90601f198316918560005283876000209360005b8988838310610b6a5750505010610b51575b505050811b0190556107d2565b015160001960f88460031b161c19169055848080610b44565b868601518855909601959485019487935001610b32565b610bab908560005286600020601f850160051c81019188861061066357601f0160051c0190612600565b85610add565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b9050865414896109b9565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b600036600319011261014d5760206060610c4e610e7b565b61014181604051610c5e81610cce565b6000815260405190610c6f82610d1f565b86820190600082526000835251151590526127b3565b60243590811515820361014d57565b90600182811c92168015610cc4575b6020831014610cae57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ca3565b602081019081106001600160401b0382111761028a57604052565b606081019081106001600160401b0382111761028a57604052565b60e081019081106001600160401b0382111761028a57604052565b604081019081106001600160401b0382111761028a57604052565b61018081019081106001600160401b0382111761028a57604052565b61010081019081106001600160401b0382111761028a57604052565b61014081019081106001600160401b0382111761028a57604052565b6101a081019081106001600160401b0382111761028a57604052565b61016081019081106001600160401b0382111761028a57604052565b604051906000600254610dd881610c94565b808552600191808316908115610e5c5750600114610e16575b5050829003601f01601f191682016001600160401b0381118382101761028a57604052565b600260009081526020935091836000805160206140958339815191525b838510610e4857505050508301013880610df1565b805488860183015293019284908201610e33565b919250506020925060ff191682850152151560051b8301013880610df1565b60405190608082016001600160401b0381118382101761028a5760405260006060838281528260208201528260408201520152565b60405190610ebd82610ce9565b60006040838281528151610ed081610d1f565b83815283602082015260208201520152565b60405190610eef82610d1f565b81600081526020610efe610eb0565b910152565b51906001600160a01b038216820361014d57565b5190811515820361014d57565b516002811015610f315790565b634e487b7160e01b600052602160045260246000fd5b604051906101a082016001600160401b0381118382101761028a57604052816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015282610140820152826101608201520152565b919060405190610fc882610d1f565b604051610fd481610d1f565b600081526000602082015282526000602083015260076000540361259457610ffa610dc6565b936101808580518101031261014d576110c56101806040519661101c88610d3a565b61102860208201610f03565b885261103660408201610f03565b6020890152606081015160408901526080810151606089015260a0810151608089015260c081015160a089015261106f60e08201610f03565b60c08901526110816101008201610f17565b60e08901526110936101208201610f17565b6101008901526110a66101408201610f17565b6101208901526110b96101608201610f17565b61014089015201610f17565b61016086015260ff6004541661257b576040513381528151602082015260208201518051916002831015610f3157604060c0927f4fc9faed95d17dd49e2bb362b93304e5a7edb10d405a0964c435d048db1f11d094828401526020808201518051151560608601520151151560808401520151151560a0820152a18051801590811561256f575b50156125565761115f6020820151610f24565b6002811015610f3157611954576020908101510151825283516001600160a01b0316330361193b57346119225760206000917fb9dafdc7d4a63b3533f85cb78d0901e4acaa0ac63bd377ce7ca15cd3c771ab4482604051858152a101526101206111c7610f47565b9360018060a01b03815116855260018060a01b03602082015116602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260018060a01b0360c08201511660c0860152600160e08601526101008101511515610100860152015115156101208401526020815101511515610140840152515115156101608301524361018083015260405161126a81610d56565b6112726125cb565b815261127c6125cb565b60208201526112896125cb565b60408201526112966125cb565b60608201526112a36125cb565b60808201526112b06125cb565b60a08201526112bd6125cb565b60c08201526112ca6125cb565b60e08201526101208301511580159061191b576101008401511561191b5760005b156119145760e08401511561190d5760005b1561159f57505061016060405161131381610d3a565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101408101511515610140840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e081015115156101008501526101008101511515610120850152610120810151151561014085015261014081015115158285015201511515610180830152610180825261149e82610d8e565b81516001600160401b03811161028a576114b9600254610c94565b601f8111611562575b50602092601f82116001146114ff57928192936000926114f4575b50508160011b916000199060031b1c191617600255565b0151905038806114dd565b601f19821693600260005260206000209160005b86811061154a5750836001959610611531575b505050811b01600255565b015160001960f88460031b161c19169055388080611526565b91926020600181928685015181550194019201611513565b600260005261159990600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b386114c2565b9192909180156119065761010082015115155b15611707575060a081018051602084015152608082015190516115d4916126a3565b60208084015101526060810151604060208401510152602082015182525b61163761161661160d8451602060408201519101519061268f565b8451519061268f565b611631604084015161162b60608601516126d0565b9061268f565b146125ad565b600080808060018060a01b0360c086015116602087510151908282156116fe575bf1156107db57600080808060018060a01b03602086015116604087510151908282156116f5575bf1156107db5751815151600091829182918291906001600160a01b03168282156116ec575bf1156107db576000805160206140b5833981519152905160408101516116d660208301519251604051938493846125ea565b0390a16000805560006001556116ea612617565b565b506108fc6116a4565b506108fc61167f565b506108fc611658565b1561175a5761171f60a082015160608301519061268f565b604083015152611738604082015160a0830151906126a3565b60206040840151015260608101516040808401510152604082015182526115f2565b6101008101511561186057610160810151156118595761014081015115155b156117ca5761179160a082015160608301519061268f565b6060830151526117aa608082015160a0830151906126a3565b6020606084015101526000604060608401510152606082015182526115f2565b606081015160808301515260006020608084015101526080810151604060808401510152600060a0830151526060810151602060a084015101526080810151604060a0840151015261016081015115156000146118405760005b156118365760808201515b82526115f2565b60a082015161182f565b61014081015115611852576000611824565b6001611824565b6000611779565b610160810151156118ff5761014081015115155b156118c75761188e60a082015161162b60608401516126d0565b60c0830151526118a7604082015160a0830151906126a3565b602060c084015101526000604060c0840151015260c082015182526115f2565b6118d460608201516126d0565b60e0830151526000602060e084015101526040810151604060e0840151015260e082015182526115f2565b6000611874565b60006115b2565b60016112fd565b60006112fd565b60016112eb565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b6020611964919392930151610f24565b6002811015610f315760011461197b575b50509050565b60018060a01b0360208501511633148060208301526000146125415760015b15612528573461250f57600060406020937f882fa68ac03b3fa79f3936461f4afc8b07b8affac4f977ccfab42c24839a3c30858351858152a10152015115612128576101606119e7610f47565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c085015260e0810151151560e08501526101008101511515610100850152600161012085015261014081015115156101408501520151151561016083015243610180830152604051611a8d81610d56565b611a956125cb565b8152611a9f6125cb565b6020820152611aac6125cb565b6040820152611ab96125cb565b6060820152611ac66125cb565b6080820152611ad36125cb565b60a0820152611ae06125cb565b60c0820152611aed6125cb565b60e08201526101208301511580159061212157610100840151156121215760005b1561211a5760e0840151156121135760005b15611dcc575050610160604051611b3681610d3a565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101408101511515610140840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e0810151151561010085015261010081015115156101208501526101208101511515610140850152610140810151151582850152015115156101808301526101808252611cc182610d8e565b81516001600160401b03811161028a57611cdc600254610c94565b601f8111611d8f575b50602092601f8211600114611d295792819293600092611d1e575b50508160011b916000199060031b1c1916176002555b803880611975565b015190503880611d00565b601f19821693600260005260206000209160005b868110611d775750836001959610611d5e575b505050811b01600255611d16565b015160001960f88460031b161c19169055388080611d50565b91926020600181928685015181550194019201611d3d565b6002600052611dc690600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38611ce5565b91929091801561210c5761010082015115155b15611f0d575060a08101805160208401515260808201519051611e01916126a3565b60208084015101526060810151604060208401510152602082015182525b611e3a61161661160d8451602060408201519101519061268f565b600080808060018060a01b0360c08601511660208751015190828215611f04575bf1156107db57600080808060018060a01b0360208601511660408751015190828215611efb575bf1156107db5751815151600091829182918291906001600160a01b0316828215611ef2575bf1156107db576000805160206140b583398151915290516040810151611ed960208301519251604051938493846125ea565b0390a1600080556000600155611eed612617565b611d16565b506108fc611ea7565b506108fc611e82565b506108fc611e5b565b15611f6057611f2560a082015160608301519061268f565b604083015152611f3e604082015160a0830151906126a3565b6020604084015101526060810151604080840151015260408201518252611e1f565b61010081015115612066576101608101511561205f5761014081015115155b15611fd057611f9760a082015160608301519061268f565b606083015152611fb0608082015160a0830151906126a3565b602060608401510152600060406060840151015260608201518252611e1f565b606081015160808301515260006020608084015101526080810151604060808401510152600060a0830151526060810151602060a084015101526080810151604060a0840151015261016081015115156000146120465760005b1561203c5760808201515b8252611e1f565b60a0820151612035565b6101408101511561205857600061202a565b600161202a565b6000611f7f565b610160810151156121055761014081015115155b156120cd5761209460a082015161162b60608401516126d0565b60c0830151526120ad604082015160a0830151906126a3565b602060c084015101526000604060c0840151015260c08201518252611e1f565b6120da60608201516126d0565b60e0830151526000602060e084015101526040810151604060e0840151015260e08201518252611e1f565b600061207a565b6000611ddf565b6001611b20565b6000611b20565b6001611b0e565b610160612133610f47565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c085015260e0810151151560e085015260016101008501526101208101511515610120850152610140810151151561014085015201511515610160830152436101808301526040516121d981610d56565b6121e16125cb565b81526121eb6125cb565b60208201526121f86125cb565b60408201526122056125cb565b60608201526122126125cb565b608082015261221f6125cb565b60a082015261222c6125cb565b60c08201526122396125cb565b60e08201526101208301511580159061250857610100840151156125085760005b156125015760e0840151156124fa5760005b15611dcc57505061016060405161228281610d3a565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101408101511515610140840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e081015115156101008501526101008101511515610120850152610120810151151561014085015261014081015115158285015201511515610180830152610180825261240d82610d8e565b81516001600160401b03811161028a57612428600254610c94565b601f81116124bd575b50602092601f82116001146124715792819293600092612466575b50508160011b916000199060031b1c191617600255611d16565b01519050388061244c565b601f19821693600260005260206000209160005b8681106124a55750836001959610611d5e57505050811b01600255611d16565b91926020600181928685015181550194019201612485565b60026000526124f490600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38612431565b600161226c565b600061226c565b600161225a565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60c08401516001600160a01b0316331461199a565b60405163100960cb60e01b8152601a6004820152602490fd5b9050600154143861114c565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b156125b457565b602460405163100960cb60e01b8152816004820152fd5b604051906125d882610ce9565b60006040838281528260208201520152565b6040919493926060820195825260208201520152565b81811061260b575050565b60008155600101612600565b612622600254610c94565b8061262a5750565b601f811160011461263d57506000600255565b600260005261268290601f0160051c600080516020614095833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612600565b6000602081208160025555565b9190820191828111610bb157821061014d57565b908103908111610bb15790565b81156126ba570490565b634e487b7160e01b600052601260045260246000fd5b9060009180159081156126e6575b501561014d57565b600181901b935090506001600160ff1b0381168103610bb15761270b600291846126b0565b14386126de565b600092918015918215612729575b50501561014d57565b80820294509150811582850482141715610bb15761274790846126b0565b143880612720565b6040519061016082016001600160401b0381118382101761028a57604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201520152565b90604051906127c182610d1f565b6000825260006020830152600960005403613fb4576127de610dc6565b926101408480518101031261014d576128836101406040519561280087610d72565b61280c60208201610f03565b875261281a60408201610f03565b6020880152606081015160408801526080810151606088015260a0810151608088015260c081015160a088015261285360e08201610f03565b60c08801526128656101008201610f17565b60e08801526128776101208201610f17565b61010088015201610f17565b61012085015260ff60045416613f9b577f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb606060405133815283516020820152602084015115156040820152a1518015908115613f8f575b5015613f7657602083810151336001600160a01b03918216811480865260c08701519092161491840182905215613f71575060015b15613f5f5760015b15613f465734613f2d5760606000917fde9af4db461e510bbe96dd74aa17cc4510914737010dc22cd27123a63409e2996020604051858152a101528051156130e7575061296361274f565b9060018060a01b03815116825260018060a01b03602082015116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c085015261012060e08201511515918260e08701526001610100870152015115158061012086015243610140860152816000146130e05760005b156130d857156130d15760005b15612c3a5750505090610120604051612a1a81610d72565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151582850152015115156101408301526101408252612b5f82610daa565b81516001600160401b03811161028a57612b7a600254610c94565b601f8111612bfd575b50602092601f8211600114612bb457928192936000926114f45750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612be5575083600195961061153157505050811b01600255565b91926020600181928685015181550194019201612bc8565b6002600052612c3490600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38612b83565b15613045575050906000805160206140d5833981519152606060018060a01b0360208501511660018060a01b0360c08601511660408601519060405192835260208301526040820152a1610140612c8f610f47565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c0850152600060e08501526000610100850152600061012085015260008285015260006101608501520151610180830152604051612d2181610d56565b612d296125cb565b8152612d336125cb565b6020820152612d406125cb565b6040820152612d4d6125cb565b6060820152612d5a6125cb565b6080820152612d676125cb565b60a0820152612d746125cb565b60c0820152612d816125cb565b60e08201526101208301511580159061303e576101008401511561303e5760005b156130375760e0840151156130305760005b1561159f575050610160604051612dca81610d3a565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101408101511515610140840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e0810151151561010085015261010081015115156101208501526101208101511515610140850152610140810151151582850152015115156101808301526101808252612f5582610d8e565b81516001600160401b03811161028a57612f70600254610c94565b601f8111612ff3575b50602092601f8211600114612faa57928192936000926114f45750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612fdb575083600195961061153157505050811b01600255565b91926020600181928685015181550194019201612fbe565b600260005261302a90600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38612f79565b6001612db4565b6000612db4565b6001612da2565b600080809381938282156130c8575bf1156107db57600080808060018060a01b0360c0860151166060860151908282156130bf575bf1156107db576060818160806000805160206140b5833981519152940151910151604051918252602082015260006040820152a16000805560006001556116ea612617565b506108fc61307a565b506108fc613054565b6001612a02565b506000612a02565b60016129f5565b6020015115613800576130f861274f565b9060018060a01b03815116825260018060a01b03602082015116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c0850152600160e085015261012061010082015115159182610100870152015115158061012086015243610140860152816000146137f95760005b156137f157156137ea5760005b156133d057505050906101206040516131b081610d72565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e081015115156101008501526101008101511515828501520151151561014083015261014082526132f582610daa565b81516001600160401b03811161028a57613310600254610c94565b601f8111613393575b50602092601f821160011461334a57928192936000926114f45750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061337b575083600195961061153157505050811b01600255565b9192602060018192868501518155019401920161335e565b60026000526133ca90600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38613319565b156137e35760015b15613045575050906000805160206140d5833981519152606060018060a01b0360208501511660018060a01b0360c08601511660408601519060405192835260208301526040820152a161014061342d610f47565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c0850152600060e085015260006101008501526000610120850152600082850152600061016085015201516101808301526040516134bf81610d56565b6134c76125cb565b81526134d16125cb565b60208201526134de6125cb565b60408201526134eb6125cb565b60608201526134f86125cb565b60808201526135056125cb565b60a08201526135126125cb565b60c082015261351f6125cb565b60e0820152610120830151158015906137dc57610100840151156137dc5760005b156137d55760e0840151156137ce5760005b1561159f57505061016060405161356881610d3a565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101408101511515610140840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151561012085015261012081015115156101408501526101408101511515828501520151151561018083015261018082526136f382610d8e565b81516001600160401b03811161028a5761370e600254610c94565b601f8111613791575b50602092601f821160011461374857928192936000926114f45750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613779575083600195961061153157505050811b01600255565b9192602060018192868501518155019401920161375c565b60026000526137c890600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38613717565b6001613552565b6000613552565b6001613540565b60006133d8565b6001613198565b506000613198565b600161318b565b7f499c3844f34dda308fb2a779b3559e6f79bfc1b8af2df6bb437b447ec49f823a600080a161382d61274f565b9060018060a01b03815116825260018060a01b03602082015116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c085015261010060e08201511515918260e0870152015115158061010086015260016101208601524361014086015280600014613f26578115613f265760005b15613f1f5760005b15613b065750505050906101206040516138e681610d72565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151582850152015115156101408301526101408252613a2b82610daa565b81516001600160401b03811161028a57613a46600254610c94565b601f8111613ac9575b50602092601f8211600114613a8057928192936000926114f45750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613ab1575083600195961061153157505050811b01600255565b91926020600181928685015181550194019201613a94565b6002600052613b0090600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38613a4f565b15613f17575b15613045575050906000805160206140d5833981519152606060018060a01b0360208501511660018060a01b0360c08601511660408601519060405192835260208301526040820152a1610140613b61610f47565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c0850152600060e08501526000610100850152600061012085015260008285015260006101608501520151610180830152604051613bf381610d56565b613bfb6125cb565b8152613c056125cb565b6020820152613c126125cb565b6040820152613c1f6125cb565b6060820152613c2c6125cb565b6080820152613c396125cb565b60a0820152613c466125cb565b60c0820152613c536125cb565b60e082015261012083015115801590613f105761010084015115613f105760005b15613f095760e084015115613f025760005b1561159f575050610160604051613c9c81610d3a565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101408101511515610140840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e0810151151561010085015261010081015115156101208501526101208101511515610140850152610140810151151582850152015115156101808301526101808252613e2782610d8e565b81516001600160401b03811161028a57613e42600254610c94565b601f8111613ec5575b50602092601f8211600114613e7c57928192936000926114f45750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110613ead575083600195961061153157505050811b01600255565b91926020600181928685015181550194019201613e90565b6002600052613efc90600080516020614095833981519152601f840160051c8101916020851061066357601f0160051c0190612600565b38613e4b565b6001613c86565b6000613c86565b6001613c74565b506000613b0c565b60006138cd565b60016138c5565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b82516001600160a01b03163314612918565b612910565b60405163100960cb60e01b815260216004820152602490fd5b905060015414386128db565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b604090600319011261014d5760408051919082016001600160401b0381118382101761028a5760405260043582526024356020830152565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b908160e091031261014d5760c06040519161404683610d04565b61404f81610f03565b835261405d60208201610f03565b602084015260408101516040840152606081015160608401526080810151608084015260a081015160a0840152015160c08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea5977c41894b154df4bb3ef9211dd2081fa6eea819d7f5ff2f8801906956f8c38fedfe3a4161f4d8f272023757b05294799bd4e9bef428bdd3ed433202d2f44da164736f6c6343000811000a`,
  BytecodeLen: 17490,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:145:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:158:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:172:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:289:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:220:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:289:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:177:67:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Driver": Driver,
  "Passenger": Passenger,
  "Ride_adminInterfereEnd": Ride_adminInterfereEnd,
  "Ride_end": Ride_end,
  "Ride_start": Ride_start
  };
export const _APIs = {
  Ride: {
    adminInterfereEnd: Ride_adminInterfereEnd,
    end: Ride_end,
    start: Ride_start
    }
  };

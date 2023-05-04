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
    rideStarted: [ctc2, ctc2, ctc1],
    timeOut: [ctc0]
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
      7: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
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
    Ride_adminInterfereEnd0_373: ctc4,
    Ride_end0_373: ctc2
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v811 = stdlib.protect(ctc0, interact.depositPercentage, 'for Admin\'s interact field depositPercentage');
  const v812 = stdlib.protect(ctc0, interact.feePercentage, 'for Admin\'s interact field feePercentage');
  
  const v817 = stdlib.ge(v812, stdlib.checkedBigNumberify('./index.rsh:145:24:decimal', stdlib.UInt_max, '0'));
  const v818 = stdlib.le(v812, stdlib.checkedBigNumberify('./index.rsh:145:46:decimal', stdlib.UInt_max, '100'));
  const v819 = v817 ? v818 : false;
  stdlib.assert(v819, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:17:function exp)'],
    msg: 'feePercentage must be non-negative',
    who: 'Admin'
    });
  const v821 = stdlib.ge(v811, stdlib.checkedBigNumberify('./index.rsh:150:28:decimal', stdlib.UInt_max, '0'));
  const v822 = stdlib.le(v811, stdlib.checkedBigNumberify('./index.rsh:150:54:decimal', stdlib.UInt_max, '100'));
  const v823 = v821 ? v822 : false;
  stdlib.assert(v823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:149:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:17:function exp)'],
    msg: 'depositPercentage must be non-negative',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v811],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:154:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v826, v827], secs: v829, time: v828, didSend: v67, from: v825 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v826, v827], secs: v829, time: v828, didSend: v67, from: v825 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v838], secs: v840, time: v839, didSend: v99, from: v837 } = txn2;
  const v841 = stdlib.safeMul(v838, v827);
  const v842 = stdlib.safeDiv(v841, stdlib.checkedBigNumberify('./index.rsh:164:61:decimal', stdlib.UInt_max, '100'));
  const v843 = stdlib.safeAdd(v838, v842);
  ;
  const v848 = stdlib.safeMul(v838, v826);
  const v849 = stdlib.safeDiv(v848, stdlib.checkedBigNumberify('./index.rsh:167:50:decimal', stdlib.UInt_max, '100'));
  const v856 = stdlib.safeAdd(v839, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, '1000'));
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: ['time', v856],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v825, v837, v838, v842, v843, v849, v856],
      evt_cnt: 0,
      funcNum: 3,
      lct: v839,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1235, time: v1234, didSend: v770, from: v1233 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v837,
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
    const {data: [], secs: v1235, time: v1234, didSend: v770, from: v1233 } = txn4;
    ;
    ;
    return;
    
    }
  else {
    const {data: [v865], secs: v867, time: v866, didSend: v145, from: v864 } = txn3;
    ;
    stdlib.protect(ctc1, await interact.ready(), {
      at: './index.rsh:186:23:application',
      fs: ['at ./index.rsh:186:23:application call to [unknown function] (defined at: ./index.rsh:186:23:function exp)', 'at ./index.rsh:186:23:application call to "liftedInteract" (defined at: ./index.rsh:186:23:application)'],
      msg: 'ready',
      who: 'Admin'
      });
    
    let v871 = false;
    let v872 = false;
    let v873 = false;
    let v874 = v866;
    
    let txn4 = txn3;
    while (await (async () => {
      const v887 = v871 ? false : true;
      const v888 = v872 ? v887 : true;
      const v889 = v873 ? false : true;
      const v890 = v888 ? v889 : false;
      
      return v890;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc2],
        timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:215:27:decimal', stdlib.UInt_max, '1000')],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 9,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v954, time: v953, didSend: v326, from: v952 } = txn6;
        ;
        const v955 = stdlib.addressEq(v864, v952);
        stdlib.assert(v955, {
          at: './index.rsh:216:14:dot',
          fs: ['at ./index.rsh:215:37:application call to [unknown function] (defined at: ./index.rsh:215:37:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v956 = true;
        null;
        const cv871 = v871;
        const cv872 = v872;
        const cv873 = true;
        const cv874 = v953;
        
        v871 = cv871;
        v872 = cv872;
        v873 = cv873;
        v874 = cv874;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v913], secs: v915, time: v914, didSend: v274, from: v912 } = txn5;
        undefined /* setApiDetails */;
        const v917 = stdlib.addressEq(v912, v837);
        const v918 = stdlib.addressEq(v912, v864);
        const v919 = v917 ? true : v918;
        const v920 = stdlib.addressEq(v912, v825);
        const v921 = v919 ? true : v920;
        stdlib.assert(v921, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)'],
          msg: 'not a participant',
          who: 'Admin'
          });
        ;
        const v929 = null;
        await txn5.getOutput('Ride_start', 'v929', ctc1, v929);
        if (v917) {
          const cv871 = v871;
          const cv872 = true;
          const cv873 = v873;
          const cv874 = v914;
          
          v871 = cv871;
          v872 = cv872;
          v873 = cv873;
          v874 = cv874;
          
          txn4 = txn5;
          continue;}
        else {
          if (v918) {
            const cv871 = true;
            const cv872 = v872;
            const cv873 = v873;
            const cv874 = v914;
            
            v871 = cv871;
            v872 = cv872;
            v873 = cv873;
            v874 = cv874;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const cv871 = v871;
            const cv872 = v872;
            const cv873 = true;
            const cv874 = v914;
            
            v871 = cv871;
            v872 = cv872;
            v873 = cv873;
            v874 = cv874;
            
            txn4 = txn5;
            continue;}}}
      
      }
    const v960 = v872 ? v871 : false;
    if (v960) {
      null;
      let v975 = false;
      let v976 = false;
      let v977 = false;
      let v978 = false;
      let v979 = false;
      let v980 = false;
      let v981 = v874;
      
      let txn5 = txn4;
      while (await (async () => {
        const v994 = v976 ? false : true;
        const v995 = v977 ? v994 : true;
        const v996 = v975 ? false : true;
        const v997 = v995 ? v996 : false;
        const v998 = v978 ? false : true;
        const v999 = v997 ? v998 : false;
        
        return v999;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc5],
          timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:289:29:decimal', stdlib.UInt_max, '10000')],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 7,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1170, time: v1169, didSend: v677, from: v1168 } = txn7;
          ;
          const v1171 = stdlib.addressEq(v864, v1168);
          stdlib.assert(v1171, {
            at: './index.rsh:290:16:dot',
            fs: ['at ./index.rsh:289:40:application call to [unknown function] (defined at: ./index.rsh:289:40:function exp)'],
            msg: 'sender correct',
            who: 'Admin'
            });
          const v1172 = false;
          null;
          const cv975 = v975;
          const cv976 = v976;
          const cv977 = v977;
          const cv978 = true;
          const cv979 = v979;
          const cv980 = v980;
          const cv981 = v1169;
          
          v975 = cv975;
          v976 = cv976;
          v977 = cv977;
          v978 = cv978;
          v979 = cv979;
          v980 = cv980;
          v981 = cv981;
          
          txn5 = txn7;
          continue;
          }
        else {
          const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn6;
          switch (v1045[0]) {
            case 'Ride_adminInterfereEnd0_373': {
              const v1048 = v1045[1];
              undefined /* setApiDetails */;
              const v1055 = stdlib.addressEq(v1044, v825);
              stdlib.assert(v1055, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:272:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:70:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
                msg: 'only an admin can interfere',
                who: 'Admin'
                });
              ;
              const v1063 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '0')];
              const v1064 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '1')];
              const v1069 = null;
              await txn6.getOutput('Ride_adminInterfereEnd', 'v1069', ctc1, v1069);
              const cv975 = true;
              const cv976 = v976;
              const cv977 = v977;
              const cv978 = v978;
              const cv979 = v1064;
              const cv980 = v1063;
              const cv981 = v1046;
              
              v975 = cv975;
              v976 = cv976;
              v977 = cv977;
              v978 = cv978;
              v979 = cv979;
              v980 = cv980;
              v981 = cv981;
              
              txn5 = txn6;
              continue;
              break;
              }
            case 'Ride_end0_373': {
              const v1108 = v1045[1];
              undefined /* setApiDetails */;
              const v1118 = stdlib.addressEq(v1044, v837);
              const v1119 = stdlib.addressEq(v1044, v864);
              const v1120 = v1118 ? true : v1119;
              stdlib.assert(v1120, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:244:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:26:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
                msg: 'not a participant',
                who: 'Admin'
                });
              ;
              const v1145 = null;
              await txn6.getOutput('Ride_end', 'v1145', ctc1, v1145);
              if (v1118) {
                const cv975 = v975;
                const cv976 = v976;
                const cv977 = true;
                const cv978 = v978;
                const cv979 = v979;
                const cv980 = v980;
                const cv981 = v1046;
                
                v975 = cv975;
                v976 = cv976;
                v977 = cv977;
                v978 = cv978;
                v979 = cv979;
                v980 = cv980;
                v981 = cv981;
                
                txn5 = txn6;
                continue;}
              else {
                const cv975 = v975;
                const cv976 = true;
                const cv977 = v977;
                const cv978 = v978;
                const cv979 = v979;
                const cv980 = v980;
                const cv981 = v1046;
                
                v975 = cv975;
                v976 = cv976;
                v977 = cv977;
                v978 = cv978;
                v979 = cv979;
                v980 = cv980;
                v981 = cv981;
                
                txn5 = txn6;
                continue;}
              break;
              }
            }}
        
        }
      let v1175;
      if (v978) {
        const v1177 = {
          admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          driver: v842,
          passenger: v843
          };
        v1175 = v1177;
        }
      else {
        const v1178 = v977 ? v976 : false;
        if (v1178) {
          const v1180 = stdlib.safeSub(v843, v849);
          const v1181 = {
            admin: v849,
            driver: v1180,
            passenger: v842
            };
          v1175 = v1181;
          }
        else {
          if (v977) {
            const v1182 = stdlib.safeSub(v838, v849);
            const v1183 = stdlib.safeAdd(v849, v842);
            const v1184 = {
              admin: v1183,
              driver: v1182,
              passenger: v842
              };
            v1175 = v1184;
            }
          else {
            if (v976) {
              const v1185 = v980 ? v979 : false;
              if (v1185) {
                const v1187 = stdlib.safeSub(v843, v849);
                const v1188 = stdlib.safeAdd(v849, v842);
                const v1189 = {
                  admin: v1188,
                  driver: v1187,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1175 = v1189;
                }
              else {
                const v1191 = v979 ? false : true;
                const v1192 = v980 ? false : v1191;
                const v1194 = {
                  admin: v842,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v843
                  };
                const v1196 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v842,
                  passenger: v843
                  };
                const v1248 = v1192 ? v1194 : v1196;
                v1175 = v1248;
                }
              }
            else {
              const v1197 = v980 ? v979 : false;
              if (v1197) {
                const v1198 = stdlib.safeSub(v838, v849);
                const v1199 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                const v1200 = stdlib.safeAdd(v849, v1199);
                const v1201 = {
                  admin: v1200,
                  driver: v1198,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1175 = v1201;
                }
              else {
                const v1202 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                const v1203 = {
                  admin: v1202,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v838
                  };
                v1175 = v1203;
                }
              }
            }
          }
        }
      const v1204 = v1175.passenger;
      const v1205 = v1175.driver;
      const v1206 = v1175.admin;
      null;
      const v1209 = stdlib.safeAdd(v1204, v1205);
      const v1211 = stdlib.safeAdd(v1209, v1206);
      const v1212 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
      const v1213 = stdlib.safeAdd(v838, v1212);
      const v1214 = stdlib.eq(v1211, v1213);
      stdlib.assert(v1214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:314:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
        who: 'Admin'
        });
      ;
      ;
      ;
      return;
      }
    else {
      ;
      ;
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc6 = stdlib.T_Data({
    Ride_adminInterfereEnd0_373: ctc5,
    Ride_end0_373: ctc1
    });
  
  
  const v814 = stdlib.protect(ctc0, interact.driverPrice, 'for Driver\'s interact field driverPrice');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v826, v827], secs: v829, time: v828, didSend: v67, from: v825 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v838], secs: v840, time: v839, didSend: v99, from: v837 } = txn2;
  const v841 = stdlib.safeMul(v838, v827);
  const v842 = stdlib.safeDiv(v841, stdlib.checkedBigNumberify('./index.rsh:164:61:decimal', stdlib.UInt_max, '100'));
  const v843 = stdlib.safeAdd(v838, v842);
  ;
  const v848 = stdlib.safeMul(v838, v826);
  const v849 = stdlib.safeDiv(v848, stdlib.checkedBigNumberify('./index.rsh:167:50:decimal', stdlib.UInt_max, '100'));
  const v856 = stdlib.safeAdd(v839, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, '1000'));
  const v860 = stdlib.ge(v814, stdlib.checkedBigNumberify('./index.rsh:174:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v860, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:174:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:172:14:application call to [unknown function] (defined at: ./index.rsh:172:18:function exp)'],
    msg: 'driverPrice must be non-negative',
    who: 'Driver'
    });
  const v862 = stdlib.eq(v814, v838);
  stdlib.assert(v862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:175:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:172:14:application call to [unknown function] (defined at: ./index.rsh:172:18:function exp)'],
    msg: 'driverPrice must be equal to passengerPrice',
    who: 'Driver'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v825, v837, v838, v842, v843, v849, v856, v814],
    evt_cnt: 1,
    funcNum: 2,
    lct: v839,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v842, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v865], secs: v867, time: v866, didSend: v145, from: v864 } = txn3;
      
      sim_r.txns.push({
        amt: v842,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v871 = false;
      const v872 = false;
      const v873 = false;
      const v874 = v866;
      
      if (await (async () => {
        const v887 = v871 ? false : true;
        const v888 = v872 ? v887 : true;
        const v889 = v873 ? false : true;
        const v890 = v888 ? v889 : false;
        
        return v890;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v960 = v872 ? v871 : false;
        if (v960) {
          null;
          const v975 = false;
          const v976 = false;
          const v977 = false;
          const v978 = false;
          const v979 = false;
          const v980 = false;
          const v981 = v874;
          
          if (await (async () => {
            const v994 = v976 ? false : true;
            const v995 = v977 ? v994 : true;
            const v996 = v975 ? false : true;
            const v997 = v995 ? v996 : false;
            const v998 = v978 ? false : true;
            const v999 = v997 ? v998 : false;
            
            return v999;})()) {
            sim_r.isHalt = false;
            }
          else {
            let v1175;
            if (v978) {
              const v1177 = {
                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                driver: v842,
                passenger: v843
                };
              v1175 = v1177;
              }
            else {
              const v1178 = v977 ? v976 : false;
              if (v1178) {
                const v1180 = stdlib.safeSub(v843, v849);
                const v1181 = {
                  admin: v849,
                  driver: v1180,
                  passenger: v842
                  };
                v1175 = v1181;
                }
              else {
                if (v977) {
                  const v1182 = stdlib.safeSub(v838, v849);
                  const v1183 = stdlib.safeAdd(v849, v842);
                  const v1184 = {
                    admin: v1183,
                    driver: v1182,
                    passenger: v842
                    };
                  v1175 = v1184;
                  }
                else {
                  if (v976) {
                    const v1185 = v980 ? v979 : false;
                    if (v1185) {
                      const v1187 = stdlib.safeSub(v843, v849);
                      const v1188 = stdlib.safeAdd(v849, v842);
                      const v1189 = {
                        admin: v1188,
                        driver: v1187,
                        passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                        };
                      v1175 = v1189;
                      }
                    else {
                      const v1191 = v979 ? false : true;
                      const v1192 = v980 ? false : v1191;
                      const v1194 = {
                        admin: v842,
                        driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        passenger: v843
                        };
                      const v1196 = {
                        admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        driver: v842,
                        passenger: v843
                        };
                      const v1248 = v1192 ? v1194 : v1196;
                      v1175 = v1248;
                      }
                    }
                  else {
                    const v1197 = v980 ? v979 : false;
                    if (v1197) {
                      const v1198 = stdlib.safeSub(v838, v849);
                      const v1199 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                      const v1200 = stdlib.safeAdd(v849, v1199);
                      const v1201 = {
                        admin: v1200,
                        driver: v1198,
                        passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                        };
                      v1175 = v1201;
                      }
                    else {
                      const v1202 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                      const v1203 = {
                        admin: v1202,
                        driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        passenger: v838
                        };
                      v1175 = v1203;
                      }
                    }
                  }
                }
              }
            const v1204 = v1175.passenger;
            const v1205 = v1175.driver;
            const v1206 = v1175.admin;
            null;
            sim_r.txns.push({
              kind: 'from',
              to: v864,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v837,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v825,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          
          sim_r.txns.push({
            kind: 'from',
            to: v837,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v864,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v856],
    tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v825, v837, v838, v842, v843, v849, v856],
      evt_cnt: 0,
      funcNum: 3,
      lct: v839,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1235, time: v1234, didSend: v770, from: v1233 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v837,
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
      tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1235, time: v1234, didSend: v770, from: v1233 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:137:29:application',
      fs: ['at ./index.rsh:136:9:application call to [unknown function] (defined at: ./index.rsh:136:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:135:28:function exp)', 'at ./index.rsh:183:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Driver'
      });
    
    return;
    
    }
  else {
    const {data: [v865], secs: v867, time: v866, didSend: v145, from: v864 } = txn3;
    ;
    let v871 = false;
    let v872 = false;
    let v873 = false;
    let v874 = v866;
    
    let txn4 = txn3;
    while (await (async () => {
      const v887 = v871 ? false : true;
      const v888 = v872 ? v887 : true;
      const v889 = v873 ? false : true;
      const v890 = v888 ? v889 : false;
      
      return v890;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc1],
        timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:215:27:decimal', stdlib.UInt_max, '1000')],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v825, v837, v838, v842, v843, v849, v864, v871, v872, v873],
          evt_cnt: 0,
          funcNum: 9,
          lct: v874,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:216:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v954, time: v953, didSend: v326, from: v952 } = txn6;
            
            ;
            const v956 = true;
            null;
            const cv871 = v871;
            const cv872 = v872;
            const cv873 = true;
            const cv874 = v953;
            
            await (async () => {
              const v871 = cv871;
              const v872 = cv872;
              const v873 = cv873;
              const v874 = cv874;
              
              if (await (async () => {
                const v887 = v871 ? false : true;
                const v888 = v872 ? v887 : true;
                const v889 = v873 ? false : true;
                const v890 = v888 ? v889 : false;
                
                return v890;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v960 = v872 ? v871 : false;
                if (v960) {
                  null;
                  const v975 = false;
                  const v976 = false;
                  const v977 = false;
                  const v978 = false;
                  const v979 = false;
                  const v980 = false;
                  const v981 = v874;
                  
                  if (await (async () => {
                    const v994 = v976 ? false : true;
                    const v995 = v977 ? v994 : true;
                    const v996 = v975 ? false : true;
                    const v997 = v995 ? v996 : false;
                    const v998 = v978 ? false : true;
                    const v999 = v997 ? v998 : false;
                    
                    return v999;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    let v1175;
                    if (v978) {
                      const v1177 = {
                        admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        driver: v842,
                        passenger: v843
                        };
                      v1175 = v1177;
                      }
                    else {
                      const v1178 = v977 ? v976 : false;
                      if (v1178) {
                        const v1180 = stdlib.safeSub(v843, v849);
                        const v1181 = {
                          admin: v849,
                          driver: v1180,
                          passenger: v842
                          };
                        v1175 = v1181;
                        }
                      else {
                        if (v977) {
                          const v1182 = stdlib.safeSub(v838, v849);
                          const v1183 = stdlib.safeAdd(v849, v842);
                          const v1184 = {
                            admin: v1183,
                            driver: v1182,
                            passenger: v842
                            };
                          v1175 = v1184;
                          }
                        else {
                          if (v976) {
                            const v1185 = v980 ? v979 : false;
                            if (v1185) {
                              const v1187 = stdlib.safeSub(v843, v849);
                              const v1188 = stdlib.safeAdd(v849, v842);
                              const v1189 = {
                                admin: v1188,
                                driver: v1187,
                                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                                };
                              v1175 = v1189;
                              }
                            else {
                              const v1191 = v979 ? false : true;
                              const v1192 = v980 ? false : v1191;
                              const v1194 = {
                                admin: v842,
                                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                                passenger: v843
                                };
                              const v1196 = {
                                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                                driver: v842,
                                passenger: v843
                                };
                              const v1248 = v1192 ? v1194 : v1196;
                              v1175 = v1248;
                              }
                            }
                          else {
                            const v1197 = v980 ? v979 : false;
                            if (v1197) {
                              const v1198 = stdlib.safeSub(v838, v849);
                              const v1199 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                              const v1200 = stdlib.safeAdd(v849, v1199);
                              const v1201 = {
                                admin: v1200,
                                driver: v1198,
                                passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                                };
                              v1175 = v1201;
                              }
                            else {
                              const v1202 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                              const v1203 = {
                                admin: v1202,
                                driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                                passenger: v838
                                };
                              v1175 = v1203;
                              }
                            }
                          }
                        }
                      }
                    const v1204 = v1175.passenger;
                    const v1205 = v1175.driver;
                    const v1206 = v1175.admin;
                    null;
                    const v1209 = stdlib.safeAdd(v1204, v1205);
                    const v1211 = stdlib.safeAdd(v1209, v1206);
                    const v1212 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
                    const v1213 = stdlib.safeAdd(v838, v1212);
                    const v1214 = stdlib.eq(v1211, v1213);
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v864,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v837,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v825,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  
                  sim_r.txns.push({
                    kind: 'from',
                    to: v837,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v864,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc3, ctc4, ctc4, ctc4],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v954, time: v953, didSend: v326, from: v952 } = txn6;
        ;
        const v955 = stdlib.addressEq(v864, v952);
        stdlib.assert(v955, {
          at: './index.rsh:216:14:dot',
          fs: ['at ./index.rsh:215:37:application call to [unknown function] (defined at: ./index.rsh:215:37:function exp)'],
          msg: 'sender correct',
          who: 'Driver'
          });
        const v956 = true;
        null;
        const cv871 = v871;
        const cv872 = v872;
        const cv873 = true;
        const cv874 = v953;
        
        v871 = cv871;
        v872 = cv872;
        v873 = cv873;
        v874 = cv874;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v913], secs: v915, time: v914, didSend: v274, from: v912 } = txn5;
        undefined /* setApiDetails */;
        const v917 = stdlib.addressEq(v912, v837);
        const v918 = stdlib.addressEq(v912, v864);
        const v919 = v917 ? true : v918;
        const v920 = stdlib.addressEq(v912, v825);
        const v921 = v919 ? true : v920;
        stdlib.assert(v921, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)'],
          msg: 'not a participant',
          who: 'Driver'
          });
        ;
        const v929 = null;
        await txn5.getOutput('Ride_start', 'v929', ctc2, v929);
        if (v917) {
          const cv871 = v871;
          const cv872 = true;
          const cv873 = v873;
          const cv874 = v914;
          
          v871 = cv871;
          v872 = cv872;
          v873 = cv873;
          v874 = cv874;
          
          txn4 = txn5;
          continue;}
        else {
          if (v918) {
            const cv871 = true;
            const cv872 = v872;
            const cv873 = v873;
            const cv874 = v914;
            
            v871 = cv871;
            v872 = cv872;
            v873 = cv873;
            v874 = cv874;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const cv871 = v871;
            const cv872 = v872;
            const cv873 = true;
            const cv874 = v914;
            
            v871 = cv871;
            v872 = cv872;
            v873 = cv873;
            v874 = cv874;
            
            txn4 = txn5;
            continue;}}}
      
      }
    const v960 = v872 ? v871 : false;
    if (v960) {
      null;
      let v975 = false;
      let v976 = false;
      let v977 = false;
      let v978 = false;
      let v979 = false;
      let v980 = false;
      let v981 = v874;
      
      let txn5 = txn4;
      while (await (async () => {
        const v994 = v976 ? false : true;
        const v995 = v977 ? v994 : true;
        const v996 = v975 ? false : true;
        const v997 = v995 ? v996 : false;
        const v998 = v978 ? false : true;
        const v999 = v997 ? v998 : false;
        
        return v999;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc6],
          timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:289:29:decimal', stdlib.UInt_max, '10000')],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v825, v837, v838, v842, v843, v849, v864, v975, v976, v977, v978, v979, v980],
            evt_cnt: 0,
            funcNum: 7,
            lct: v981,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:290:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1170, time: v1169, didSend: v677, from: v1168 } = txn7;
              
              ;
              const v1172 = false;
              null;
              const cv975 = v975;
              const cv976 = v976;
              const cv977 = v977;
              const cv978 = true;
              const cv979 = v979;
              const cv980 = v980;
              const cv981 = v1169;
              
              await (async () => {
                const v975 = cv975;
                const v976 = cv976;
                const v977 = cv977;
                const v978 = cv978;
                const v979 = cv979;
                const v980 = cv980;
                const v981 = cv981;
                
                if (await (async () => {
                  const v994 = v976 ? false : true;
                  const v995 = v977 ? v994 : true;
                  const v996 = v975 ? false : true;
                  const v997 = v995 ? v996 : false;
                  const v998 = v978 ? false : true;
                  const v999 = v997 ? v998 : false;
                  
                  return v999;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  let v1175;
                  if (v978) {
                    const v1177 = {
                      admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      driver: v842,
                      passenger: v843
                      };
                    v1175 = v1177;
                    }
                  else {
                    const v1178 = v977 ? v976 : false;
                    if (v1178) {
                      const v1180 = stdlib.safeSub(v843, v849);
                      const v1181 = {
                        admin: v849,
                        driver: v1180,
                        passenger: v842
                        };
                      v1175 = v1181;
                      }
                    else {
                      if (v977) {
                        const v1182 = stdlib.safeSub(v838, v849);
                        const v1183 = stdlib.safeAdd(v849, v842);
                        const v1184 = {
                          admin: v1183,
                          driver: v1182,
                          passenger: v842
                          };
                        v1175 = v1184;
                        }
                      else {
                        if (v976) {
                          const v1185 = v980 ? v979 : false;
                          if (v1185) {
                            const v1187 = stdlib.safeSub(v843, v849);
                            const v1188 = stdlib.safeAdd(v849, v842);
                            const v1189 = {
                              admin: v1188,
                              driver: v1187,
                              passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                              };
                            v1175 = v1189;
                            }
                          else {
                            const v1191 = v979 ? false : true;
                            const v1192 = v980 ? false : v1191;
                            const v1194 = {
                              admin: v842,
                              driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                              passenger: v843
                              };
                            const v1196 = {
                              admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                              driver: v842,
                              passenger: v843
                              };
                            const v1248 = v1192 ? v1194 : v1196;
                            v1175 = v1248;
                            }
                          }
                        else {
                          const v1197 = v980 ? v979 : false;
                          if (v1197) {
                            const v1198 = stdlib.safeSub(v838, v849);
                            const v1199 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                            const v1200 = stdlib.safeAdd(v849, v1199);
                            const v1201 = {
                              admin: v1200,
                              driver: v1198,
                              passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                              };
                            v1175 = v1201;
                            }
                          else {
                            const v1202 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                            const v1203 = {
                              admin: v1202,
                              driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                              passenger: v838
                              };
                            v1175 = v1203;
                            }
                          }
                        }
                      }
                    }
                  const v1204 = v1175.passenger;
                  const v1205 = v1175.driver;
                  const v1206 = v1175.admin;
                  null;
                  const v1209 = stdlib.safeAdd(v1204, v1205);
                  const v1211 = stdlib.safeAdd(v1209, v1206);
                  const v1212 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
                  const v1213 = stdlib.safeAdd(v838, v1212);
                  const v1214 = stdlib.eq(v1211, v1213);
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v864,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v837,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v825,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc3, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1170, time: v1169, didSend: v677, from: v1168 } = txn7;
          ;
          const v1171 = stdlib.addressEq(v864, v1168);
          stdlib.assert(v1171, {
            at: './index.rsh:290:16:dot',
            fs: ['at ./index.rsh:289:40:application call to [unknown function] (defined at: ./index.rsh:289:40:function exp)'],
            msg: 'sender correct',
            who: 'Driver'
            });
          const v1172 = false;
          null;
          const cv975 = v975;
          const cv976 = v976;
          const cv977 = v977;
          const cv978 = true;
          const cv979 = v979;
          const cv980 = v980;
          const cv981 = v1169;
          
          v975 = cv975;
          v976 = cv976;
          v977 = cv977;
          v978 = cv978;
          v979 = cv979;
          v980 = cv980;
          v981 = cv981;
          
          txn5 = txn7;
          continue;
          }
        else {
          const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn6;
          switch (v1045[0]) {
            case 'Ride_adminInterfereEnd0_373': {
              const v1048 = v1045[1];
              undefined /* setApiDetails */;
              const v1055 = stdlib.addressEq(v1044, v825);
              stdlib.assert(v1055, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:272:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:70:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
                msg: 'only an admin can interfere',
                who: 'Driver'
                });
              ;
              const v1063 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '0')];
              const v1064 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '1')];
              const v1069 = null;
              await txn6.getOutput('Ride_adminInterfereEnd', 'v1069', ctc2, v1069);
              const v1078 = 'Admin detected on end ride.';
              stdlib.protect(ctc2, await interact.log(v1078), {
                at: './index.rsh:277:32:application',
                fs: ['at ./index.rsh:277:32:application call to [unknown function] (defined at: ./index.rsh:277:32:function exp)', 'at ./index.rsh:277:32:application call to "liftedInteract" (defined at: ./index.rsh:277:32:application)', 'at ./index.rsh:275:17:application call to [unknown function] (defined at: ./index.rsh:275:17:function exp)'],
                msg: 'log',
                who: 'Driver'
                });
              
              const cv975 = true;
              const cv976 = v976;
              const cv977 = v977;
              const cv978 = v978;
              const cv979 = v1064;
              const cv980 = v1063;
              const cv981 = v1046;
              
              v975 = cv975;
              v976 = cv976;
              v977 = cv977;
              v978 = cv978;
              v979 = cv979;
              v980 = cv980;
              v981 = cv981;
              
              txn5 = txn6;
              continue;
              break;
              }
            case 'Ride_end0_373': {
              const v1108 = v1045[1];
              undefined /* setApiDetails */;
              const v1118 = stdlib.addressEq(v1044, v837);
              const v1119 = stdlib.addressEq(v1044, v864);
              const v1120 = v1118 ? true : v1119;
              stdlib.assert(v1120, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:244:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:26:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
                msg: 'not a participant',
                who: 'Driver'
                });
              ;
              const v1145 = null;
              await txn6.getOutput('Ride_end', 'v1145', ctc2, v1145);
              if (v1118) {
                const cv975 = v975;
                const cv976 = v976;
                const cv977 = true;
                const cv978 = v978;
                const cv979 = v979;
                const cv980 = v980;
                const cv981 = v1046;
                
                v975 = cv975;
                v976 = cv976;
                v977 = cv977;
                v978 = cv978;
                v979 = cv979;
                v980 = cv980;
                v981 = cv981;
                
                txn5 = txn6;
                continue;}
              else {
                const cv975 = v975;
                const cv976 = true;
                const cv977 = v977;
                const cv978 = v978;
                const cv979 = v979;
                const cv980 = v980;
                const cv981 = v1046;
                
                v975 = cv975;
                v976 = cv976;
                v977 = cv977;
                v978 = cv978;
                v979 = cv979;
                v980 = cv980;
                v981 = cv981;
                
                txn5 = txn6;
                continue;}
              break;
              }
            }}
        
        }
      let v1175;
      if (v978) {
        const v1177 = {
          admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          driver: v842,
          passenger: v843
          };
        v1175 = v1177;
        }
      else {
        const v1178 = v977 ? v976 : false;
        if (v1178) {
          const v1180 = stdlib.safeSub(v843, v849);
          const v1181 = {
            admin: v849,
            driver: v1180,
            passenger: v842
            };
          v1175 = v1181;
          }
        else {
          if (v977) {
            const v1182 = stdlib.safeSub(v838, v849);
            const v1183 = stdlib.safeAdd(v849, v842);
            const v1184 = {
              admin: v1183,
              driver: v1182,
              passenger: v842
              };
            v1175 = v1184;
            }
          else {
            if (v976) {
              const v1185 = v980 ? v979 : false;
              if (v1185) {
                const v1187 = stdlib.safeSub(v843, v849);
                const v1188 = stdlib.safeAdd(v849, v842);
                const v1189 = {
                  admin: v1188,
                  driver: v1187,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1175 = v1189;
                }
              else {
                const v1191 = v979 ? false : true;
                const v1192 = v980 ? false : v1191;
                const v1194 = {
                  admin: v842,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v843
                  };
                const v1196 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v842,
                  passenger: v843
                  };
                const v1248 = v1192 ? v1194 : v1196;
                v1175 = v1248;
                }
              }
            else {
              const v1197 = v980 ? v979 : false;
              if (v1197) {
                const v1198 = stdlib.safeSub(v838, v849);
                const v1199 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                const v1200 = stdlib.safeAdd(v849, v1199);
                const v1201 = {
                  admin: v1200,
                  driver: v1198,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1175 = v1201;
                }
              else {
                const v1202 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                const v1203 = {
                  admin: v1202,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v838
                  };
                v1175 = v1203;
                }
              }
            }
          }
        }
      const v1204 = v1175.passenger;
      const v1205 = v1175.driver;
      const v1206 = v1175.admin;
      null;
      const v1209 = stdlib.safeAdd(v1204, v1205);
      const v1211 = stdlib.safeAdd(v1209, v1206);
      const v1212 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
      const v1213 = stdlib.safeAdd(v838, v1212);
      const v1214 = stdlib.eq(v1211, v1213);
      stdlib.assert(v1214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:314:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
        who: 'Driver'
        });
      ;
      ;
      ;
      return;
      }
    else {
      const v963 = 'BC: does not';
      stdlib.protect(ctc2, await interact.log(v963), {
        at: './index.rsh:224:24:application',
        fs: ['at ./index.rsh:224:24:application call to [unknown function] (defined at: ./index.rsh:224:24:function exp)', 'at ./index.rsh:224:24:application call to "liftedInteract" (defined at: ./index.rsh:224:24:application)'],
        msg: 'log',
        who: 'Driver'
        });
      
      ;
      ;
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
    Ride_adminInterfereEnd0_373: ctc4,
    Ride_end0_373: ctc1
    });
  const ctc6 = stdlib.T_Address;
  
  
  const v813 = stdlib.protect(ctc0, interact.passengerPrice, 'for Passenger\'s interact field passengerPrice');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v826, v827], secs: v829, time: v828, didSend: v67, from: v825 } = txn1;
  ;
  const v832 = stdlib.ge(v813, stdlib.checkedBigNumberify('./index.rsh:161:29:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v832, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:159:17:application call to [unknown function] (defined at: ./index.rsh:159:21:function exp)'],
    msg: 'passengerPrice must be non-negative',
    who: 'Passenger'
    });
  
  const v834 = stdlib.safeMul(v813, v827);
  const v835 = stdlib.safeDiv(v834, stdlib.checkedBigNumberify('./index.rsh:164:61:decimal', stdlib.UInt_max, '100'));
  const v836 = stdlib.safeAdd(v813, v835);
  
  const txn2 = await (ctc.sendrecv({
    args: [v825, v826, v827, v813],
    evt_cnt: 1,
    funcNum: 1,
    lct: v828,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v836, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v838], secs: v840, time: v839, didSend: v99, from: v837 } = txn2;
      
      const v841 = stdlib.safeMul(v838, v827);
      const v842 = stdlib.safeDiv(v841, stdlib.checkedBigNumberify('./index.rsh:164:61:decimal', stdlib.UInt_max, '100'));
      const v843 = stdlib.safeAdd(v838, v842);
      sim_r.txns.push({
        amt: v843,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v848 = stdlib.safeMul(v838, v826);
      const v849 = stdlib.safeDiv(v848, stdlib.checkedBigNumberify('./index.rsh:167:50:decimal', stdlib.UInt_max, '100'));
      const v856 = stdlib.safeAdd(v839, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, '1000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v838], secs: v840, time: v839, didSend: v99, from: v837 } = txn2;
  const v841 = stdlib.safeMul(v838, v827);
  const v842 = stdlib.safeDiv(v841, stdlib.checkedBigNumberify('./index.rsh:164:61:decimal', stdlib.UInt_max, '100'));
  const v843 = stdlib.safeAdd(v838, v842);
  ;
  const v848 = stdlib.safeMul(v838, v826);
  const v849 = stdlib.safeDiv(v848, stdlib.checkedBigNumberify('./index.rsh:167:50:decimal', stdlib.UInt_max, '100'));
  const v856 = stdlib.safeAdd(v839, stdlib.checkedBigNumberify('./index.rsh:182:27:decimal', stdlib.UInt_max, '1000'));
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: ['time', v856],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v825, v837, v838, v842, v843, v849, v856],
      evt_cnt: 0,
      funcNum: 3,
      lct: v839,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1235, time: v1234, didSend: v770, from: v1233 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v837,
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
    const {data: [], secs: v1235, time: v1234, didSend: v770, from: v1233 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:137:29:application',
      fs: ['at ./index.rsh:136:9:application call to [unknown function] (defined at: ./index.rsh:136:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:135:28:function exp)', 'at ./index.rsh:183:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Passenger'
      });
    
    return;
    
    }
  else {
    const {data: [v865], secs: v867, time: v866, didSend: v145, from: v864 } = txn3;
    ;
    let v871 = false;
    let v872 = false;
    let v873 = false;
    let v874 = v866;
    
    let txn4 = txn3;
    while (await (async () => {
      const v887 = v871 ? false : true;
      const v888 = v872 ? v887 : true;
      const v889 = v873 ? false : true;
      const v890 = v888 ? v889 : false;
      
      return v890;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc1],
        timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:215:27:decimal', stdlib.UInt_max, '1000')],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 9,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v954, time: v953, didSend: v326, from: v952 } = txn6;
        ;
        const v955 = stdlib.addressEq(v864, v952);
        stdlib.assert(v955, {
          at: './index.rsh:216:14:dot',
          fs: ['at ./index.rsh:215:37:application call to [unknown function] (defined at: ./index.rsh:215:37:function exp)'],
          msg: 'sender correct',
          who: 'Passenger'
          });
        const v956 = true;
        null;
        const cv871 = v871;
        const cv872 = v872;
        const cv873 = true;
        const cv874 = v953;
        
        v871 = cv871;
        v872 = cv872;
        v873 = cv873;
        v874 = cv874;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v913], secs: v915, time: v914, didSend: v274, from: v912 } = txn5;
        undefined /* setApiDetails */;
        const v917 = stdlib.addressEq(v912, v837);
        const v918 = stdlib.addressEq(v912, v864);
        const v919 = v917 ? true : v918;
        const v920 = stdlib.addressEq(v912, v825);
        const v921 = v919 ? true : v920;
        stdlib.assert(v921, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)'],
          msg: 'not a participant',
          who: 'Passenger'
          });
        ;
        const v929 = null;
        await txn5.getOutput('Ride_start', 'v929', ctc2, v929);
        if (v917) {
          const cv871 = v871;
          const cv872 = true;
          const cv873 = v873;
          const cv874 = v914;
          
          v871 = cv871;
          v872 = cv872;
          v873 = cv873;
          v874 = cv874;
          
          txn4 = txn5;
          continue;}
        else {
          if (v918) {
            const cv871 = true;
            const cv872 = v872;
            const cv873 = v873;
            const cv874 = v914;
            
            v871 = cv871;
            v872 = cv872;
            v873 = cv873;
            v874 = cv874;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const cv871 = v871;
            const cv872 = v872;
            const cv873 = true;
            const cv874 = v914;
            
            v871 = cv871;
            v872 = cv872;
            v873 = cv873;
            v874 = cv874;
            
            txn4 = txn5;
            continue;}}}
      
      }
    const v960 = v872 ? v871 : false;
    if (v960) {
      null;
      let v975 = false;
      let v976 = false;
      let v977 = false;
      let v978 = false;
      let v979 = false;
      let v980 = false;
      let v981 = v874;
      
      let txn5 = txn4;
      while (await (async () => {
        const v994 = v976 ? false : true;
        const v995 = v977 ? v994 : true;
        const v996 = v975 ? false : true;
        const v997 = v995 ? v996 : false;
        const v998 = v978 ? false : true;
        const v999 = v997 ? v998 : false;
        
        return v999;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc5],
          timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:289:29:decimal', stdlib.UInt_max, '10000')],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 7,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1170, time: v1169, didSend: v677, from: v1168 } = txn7;
          ;
          const v1171 = stdlib.addressEq(v864, v1168);
          stdlib.assert(v1171, {
            at: './index.rsh:290:16:dot',
            fs: ['at ./index.rsh:289:40:application call to [unknown function] (defined at: ./index.rsh:289:40:function exp)'],
            msg: 'sender correct',
            who: 'Passenger'
            });
          const v1172 = false;
          null;
          const cv975 = v975;
          const cv976 = v976;
          const cv977 = v977;
          const cv978 = true;
          const cv979 = v979;
          const cv980 = v980;
          const cv981 = v1169;
          
          v975 = cv975;
          v976 = cv976;
          v977 = cv977;
          v978 = cv978;
          v979 = cv979;
          v980 = cv980;
          v981 = cv981;
          
          txn5 = txn7;
          continue;
          }
        else {
          const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn6;
          switch (v1045[0]) {
            case 'Ride_adminInterfereEnd0_373': {
              const v1048 = v1045[1];
              undefined /* setApiDetails */;
              const v1055 = stdlib.addressEq(v1044, v825);
              stdlib.assert(v1055, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:272:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:70:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
                msg: 'only an admin can interfere',
                who: 'Passenger'
                });
              ;
              const v1063 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '0')];
              const v1064 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '1')];
              const v1069 = null;
              await txn6.getOutput('Ride_adminInterfereEnd', 'v1069', ctc2, v1069);
              const cv975 = true;
              const cv976 = v976;
              const cv977 = v977;
              const cv978 = v978;
              const cv979 = v1064;
              const cv980 = v1063;
              const cv981 = v1046;
              
              v975 = cv975;
              v976 = cv976;
              v977 = cv977;
              v978 = cv978;
              v979 = cv979;
              v980 = cv980;
              v981 = cv981;
              
              txn5 = txn6;
              continue;
              break;
              }
            case 'Ride_end0_373': {
              const v1108 = v1045[1];
              undefined /* setApiDetails */;
              const v1118 = stdlib.addressEq(v1044, v837);
              const v1119 = stdlib.addressEq(v1044, v864);
              const v1120 = v1118 ? true : v1119;
              stdlib.assert(v1120, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:244:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:26:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
                msg: 'not a participant',
                who: 'Passenger'
                });
              ;
              const v1145 = null;
              await txn6.getOutput('Ride_end', 'v1145', ctc2, v1145);
              if (v1118) {
                const cv975 = v975;
                const cv976 = v976;
                const cv977 = true;
                const cv978 = v978;
                const cv979 = v979;
                const cv980 = v980;
                const cv981 = v1046;
                
                v975 = cv975;
                v976 = cv976;
                v977 = cv977;
                v978 = cv978;
                v979 = cv979;
                v980 = cv980;
                v981 = cv981;
                
                txn5 = txn6;
                continue;}
              else {
                const cv975 = v975;
                const cv976 = true;
                const cv977 = v977;
                const cv978 = v978;
                const cv979 = v979;
                const cv980 = v980;
                const cv981 = v1046;
                
                v975 = cv975;
                v976 = cv976;
                v977 = cv977;
                v978 = cv978;
                v979 = cv979;
                v980 = cv980;
                v981 = cv981;
                
                txn5 = txn6;
                continue;}
              break;
              }
            }}
        
        }
      let v1175;
      if (v978) {
        const v1177 = {
          admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          driver: v842,
          passenger: v843
          };
        v1175 = v1177;
        }
      else {
        const v1178 = v977 ? v976 : false;
        if (v1178) {
          const v1180 = stdlib.safeSub(v843, v849);
          const v1181 = {
            admin: v849,
            driver: v1180,
            passenger: v842
            };
          v1175 = v1181;
          }
        else {
          if (v977) {
            const v1182 = stdlib.safeSub(v838, v849);
            const v1183 = stdlib.safeAdd(v849, v842);
            const v1184 = {
              admin: v1183,
              driver: v1182,
              passenger: v842
              };
            v1175 = v1184;
            }
          else {
            if (v976) {
              const v1185 = v980 ? v979 : false;
              if (v1185) {
                const v1187 = stdlib.safeSub(v843, v849);
                const v1188 = stdlib.safeAdd(v849, v842);
                const v1189 = {
                  admin: v1188,
                  driver: v1187,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1175 = v1189;
                }
              else {
                const v1191 = v979 ? false : true;
                const v1192 = v980 ? false : v1191;
                const v1194 = {
                  admin: v842,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v843
                  };
                const v1196 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v842,
                  passenger: v843
                  };
                const v1248 = v1192 ? v1194 : v1196;
                v1175 = v1248;
                }
              }
            else {
              const v1197 = v980 ? v979 : false;
              if (v1197) {
                const v1198 = stdlib.safeSub(v838, v849);
                const v1199 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                const v1200 = stdlib.safeAdd(v849, v1199);
                const v1201 = {
                  admin: v1200,
                  driver: v1198,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v1175 = v1201;
                }
              else {
                const v1202 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                const v1203 = {
                  admin: v1202,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v838
                  };
                v1175 = v1203;
                }
              }
            }
          }
        }
      const v1204 = v1175.passenger;
      const v1205 = v1175.driver;
      const v1206 = v1175.admin;
      null;
      const v1209 = stdlib.safeAdd(v1204, v1205);
      const v1211 = stdlib.safeAdd(v1209, v1206);
      const v1212 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
      const v1213 = stdlib.safeAdd(v838, v1212);
      const v1214 = stdlib.eq(v1211, v1213);
      stdlib.assert(v1214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:314:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
        msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
        who: 'Passenger'
        });
      ;
      ;
      ;
      return;
      }
    else {
      ;
      ;
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
    Ride_adminInterfereEnd0_373: ctc3,
    Ride_end0_373: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v825, v837, v838, v842, v843, v849, v864, v975, v976, v977, v978, v979, v980] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1016 = ctc.selfAddress();
  const v1018 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:271:70:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to "runRide_adminInterfereEnd0_373" (defined at: ./index.rsh:271:12:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
    msg: 'in',
    who: 'Ride_adminInterfereEnd'
    });
  const v1023 = stdlib.addressEq(v1016, v825);
  stdlib.assert(v1023, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:272:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:70:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to "runRide_adminInterfereEnd0_373" (defined at: ./index.rsh:271:12:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
    msg: 'only an admin can interfere',
    who: 'Ride_adminInterfereEnd'
    });
  const v1032 = ['Ride_adminInterfereEnd0_373', v1018];
  
  const txn1 = await (ctc.sendrecv({
    args: [v825, v837, v838, v842, v843, v849, v864, v975, v976, v977, v978, v979, v980, v1032],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:274:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn1;
      
      switch (v1045[0]) {
        case 'Ride_adminInterfereEnd0_373': {
          const v1048 = v1045[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Ride_adminInterfereEnd"
            });
          ;
          const v1063 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '0')];
          const v1064 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '1')];
          const v1069 = null;
          const v1070 = await txn1.getOutput('Ride_adminInterfereEnd', 'v1069', ctc6, v1069);
          
          const v1809 = true;
          const v1810 = v976;
          const v1811 = v977;
          const v1812 = v978;
          const v1813 = v1064;
          const v1814 = v1063;
          const v1816 = v976 ? false : true;
          const v1817 = v977 ? v1816 : true;
          const v1819 = v1817 ? false : false;
          const v1820 = v978 ? false : true;
          const v1821 = v1819 ? v1820 : false;
          if (v1821) {
            sim_r.isHalt = false;
            }
          else {
            let v1822;
            if (v978) {
              const v1823 = {
                admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                driver: v842,
                passenger: v843
                };
              v1822 = v1823;
              }
            else {
              const v1824 = v977 ? v976 : false;
              if (v1824) {
                const v1825 = stdlib.safeSub(v843, v849);
                const v1826 = {
                  admin: v849,
                  driver: v1825,
                  passenger: v842
                  };
                v1822 = v1826;
                }
              else {
                if (v977) {
                  const v1827 = stdlib.safeSub(v838, v849);
                  const v1828 = stdlib.safeAdd(v849, v842);
                  const v1829 = {
                    admin: v1828,
                    driver: v1827,
                    passenger: v842
                    };
                  v1822 = v1829;
                  }
                else {
                  if (v976) {
                    const v1830 = v1063 ? v1064 : false;
                    if (v1830) {
                      const v1831 = stdlib.safeSub(v843, v849);
                      const v1832 = stdlib.safeAdd(v849, v842);
                      const v1833 = {
                        admin: v1832,
                        driver: v1831,
                        passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                        };
                      v1822 = v1833;
                      }
                    else {
                      const v1834 = v1064 ? false : true;
                      const v1835 = v1063 ? false : v1834;
                      const v1836 = {
                        admin: v842,
                        driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        passenger: v843
                        };
                      const v1837 = {
                        admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        driver: v842,
                        passenger: v843
                        };
                      const v1838 = v1835 ? v1836 : v1837;
                      v1822 = v1838;
                      }
                    }
                  else {
                    const v1839 = v1063 ? v1064 : false;
                    if (v1839) {
                      const v1840 = stdlib.safeSub(v838, v849);
                      const v1841 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                      const v1842 = stdlib.safeAdd(v849, v1841);
                      const v1843 = {
                        admin: v1842,
                        driver: v1840,
                        passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                        };
                      v1822 = v1843;
                      }
                    else {
                      const v1844 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                      const v1845 = {
                        admin: v1844,
                        driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        passenger: v838
                        };
                      v1822 = v1845;
                      }
                    }
                  }
                }
              }
            const v1846 = v1822.passenger;
            const v1847 = v1822.driver;
            const v1848 = v1822.admin;
            null;
            sim_r.txns.push({
              kind: 'from',
              to: v864,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v837,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v825,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Ride_end0_373': {
          const v1108 = v1045[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn1;
  switch (v1045[0]) {
    case 'Ride_adminInterfereEnd0_373': {
      const v1048 = v1045[1];
      undefined /* setApiDetails */;
      const v1055 = stdlib.addressEq(v1044, v825);
      stdlib.assert(v1055, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:272:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:70:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:271:70:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
        msg: 'only an admin can interfere',
        who: 'Ride_adminInterfereEnd'
        });
      ;
      const v1063 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '0')];
      const v1064 = v1048[stdlib.checkedBigNumberify('./index.rsh:271:12:spread', stdlib.UInt_max, '1')];
      const v1069 = null;
      const v1070 = await txn1.getOutput('Ride_adminInterfereEnd', 'v1069', ctc6, v1069);
      if (v588) {
        stdlib.protect(ctc6, await interact.out(v1048, v1070), {
          at: './index.rsh:271:13:application',
          fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:276:16:application call to "ret" (defined at: ./index.rsh:275:17:function exp)', 'at ./index.rsh:275:17:application call to [unknown function] (defined at: ./index.rsh:275:17:function exp)'],
          msg: 'out',
          who: 'Ride_adminInterfereEnd'
          });
        }
      else {
        }
      
      const v1809 = true;
      const v1810 = v976;
      const v1811 = v977;
      const v1812 = v978;
      const v1813 = v1064;
      const v1814 = v1063;
      const v1816 = v976 ? false : true;
      const v1817 = v977 ? v1816 : true;
      const v1819 = v1817 ? false : false;
      const v1820 = v978 ? false : true;
      const v1821 = v1819 ? v1820 : false;
      if (v1821) {
        return;
        }
      else {
        let v1822;
        if (v978) {
          const v1823 = {
            admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            driver: v842,
            passenger: v843
            };
          v1822 = v1823;
          }
        else {
          const v1824 = v977 ? v976 : false;
          if (v1824) {
            const v1825 = stdlib.safeSub(v843, v849);
            const v1826 = {
              admin: v849,
              driver: v1825,
              passenger: v842
              };
            v1822 = v1826;
            }
          else {
            if (v977) {
              const v1827 = stdlib.safeSub(v838, v849);
              const v1828 = stdlib.safeAdd(v849, v842);
              const v1829 = {
                admin: v1828,
                driver: v1827,
                passenger: v842
                };
              v1822 = v1829;
              }
            else {
              if (v976) {
                const v1830 = v1063 ? v1064 : false;
                if (v1830) {
                  const v1831 = stdlib.safeSub(v843, v849);
                  const v1832 = stdlib.safeAdd(v849, v842);
                  const v1833 = {
                    admin: v1832,
                    driver: v1831,
                    passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                    };
                  v1822 = v1833;
                  }
                else {
                  const v1834 = v1064 ? false : true;
                  const v1835 = v1063 ? false : v1834;
                  const v1836 = {
                    admin: v842,
                    driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    passenger: v843
                    };
                  const v1837 = {
                    admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    driver: v842,
                    passenger: v843
                    };
                  const v1838 = v1835 ? v1836 : v1837;
                  v1822 = v1838;
                  }
                }
              else {
                const v1839 = v1063 ? v1064 : false;
                if (v1839) {
                  const v1840 = stdlib.safeSub(v838, v849);
                  const v1841 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:113:24:decimal', stdlib.UInt_max, '2'), v842);
                  const v1842 = stdlib.safeAdd(v849, v1841);
                  const v1843 = {
                    admin: v1842,
                    driver: v1840,
                    passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                    };
                  v1822 = v1843;
                  }
                else {
                  const v1844 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:120:18:decimal', stdlib.UInt_max, '2'), v842);
                  const v1845 = {
                    admin: v1844,
                    driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    passenger: v838
                    };
                  v1822 = v1845;
                  }
                }
              }
            }
          }
        const v1846 = v1822.passenger;
        const v1847 = v1822.driver;
        const v1848 = v1822.admin;
        null;
        const v1849 = stdlib.safeAdd(v1846, v1847);
        const v1850 = stdlib.safeAdd(v1849, v1848);
        const v1851 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
        const v1852 = stdlib.safeAdd(v838, v1851);
        const v1853 = stdlib.eq(v1850, v1852);
        stdlib.assert(v1853, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:314:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
          msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
          who: 'Ride_adminInterfereEnd'
          });
        ;
        ;
        ;
        return;
        }
      break;
      }
    case 'Ride_end0_373': {
      const v1108 = v1045[1];
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
    Ride_adminInterfereEnd0_373: ctc4,
    Ride_end0_373: ctc3
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v825, v837, v838, v842, v843, v849, v864, v975, v976, v977, v978, v979, v980] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1004 = ctc.selfAddress();
  const v1006 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:26:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to "runRide_end0_373" (defined at: ./index.rsh:243:12:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
    msg: 'in',
    who: 'Ride_end'
    });
  const v1007 = stdlib.addressEq(v1004, v837);
  const v1008 = stdlib.addressEq(v1004, v864);
  const v1009 = v1007 ? true : v1008;
  stdlib.assert(v1009, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:244:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:26:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to "runRide_end0_373" (defined at: ./index.rsh:243:12:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
    msg: 'not a participant',
    who: 'Ride_end'
    });
  const v1014 = ['Ride_end0_373', v1006];
  
  const txn1 = await (ctc.sendrecv({
    args: [v825, v837, v838, v842, v843, v849, v864, v975, v976, v977, v978, v979, v980, v1014],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn1;
      
      switch (v1045[0]) {
        case 'Ride_adminInterfereEnd0_373': {
          const v1048 = v1045[1];
          
          break;
          }
        case 'Ride_end0_373': {
          const v1108 = v1045[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Ride_end"
            });
          const v1118 = stdlib.addressEq(v1044, v837);
          ;
          const v1145 = null;
          const v1146 = await txn1.getOutput('Ride_end', 'v1145', ctc6, v1145);
          
          if (v1118) {
            const v1989 = v975;
            const v1990 = v976;
            const v1991 = true;
            const v1992 = v978;
            const v1993 = v979;
            const v1994 = v980;
            const v1998 = v975 ? false : true;
            const v1999 = v976 ? false : v1998;
            const v2000 = v978 ? false : true;
            const v2001 = v1999 ? v2000 : false;
            if (v2001) {
              sim_r.isHalt = false;
              }
            else {
              let v2002;
              if (v978) {
                const v2003 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v842,
                  passenger: v843
                  };
                v2002 = v2003;
                }
              else {
                if (v976) {
                  const v2005 = stdlib.safeSub(v843, v849);
                  const v2006 = {
                    admin: v849,
                    driver: v2005,
                    passenger: v842
                    };
                  v2002 = v2006;
                  }
                else {
                  const v2007 = stdlib.safeSub(v838, v849);
                  const v2008 = stdlib.safeAdd(v849, v842);
                  const v2009 = {
                    admin: v2008,
                    driver: v2007,
                    passenger: v842
                    };
                  v2002 = v2009;
                  }
                }
              const v2026 = v2002.passenger;
              const v2027 = v2002.driver;
              const v2028 = v2002.admin;
              null;
              sim_r.txns.push({
                kind: 'from',
                to: v864,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v837,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v825,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v2034 = v975;
            const v2035 = true;
            const v2036 = v977;
            const v2037 = v978;
            const v2038 = v979;
            const v2039 = v980;
            const v2043 = v975 ? false : true;
            const v2044 = v977 ? false : v2043;
            const v2045 = v978 ? false : true;
            const v2046 = v2044 ? v2045 : false;
            if (v2046) {
              sim_r.isHalt = false;
              }
            else {
              let v2047;
              if (v978) {
                const v2048 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v842,
                  passenger: v843
                  };
                v2047 = v2048;
                }
              else {
                if (v977) {
                  const v2050 = stdlib.safeSub(v843, v849);
                  const v2051 = {
                    admin: v849,
                    driver: v2050,
                    passenger: v842
                    };
                  v2047 = v2051;
                  }
                else {
                  const v2055 = v980 ? v979 : false;
                  if (v2055) {
                    const v2056 = stdlib.safeSub(v843, v849);
                    const v2057 = stdlib.safeAdd(v849, v842);
                    const v2058 = {
                      admin: v2057,
                      driver: v2056,
                      passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                      };
                    v2047 = v2058;
                    }
                  else {
                    const v2059 = v979 ? false : true;
                    const v2060 = v980 ? false : v2059;
                    const v2061 = {
                      admin: v842,
                      driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      passenger: v843
                      };
                    const v2062 = {
                      admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      driver: v842,
                      passenger: v843
                      };
                    const v2063 = v2060 ? v2061 : v2062;
                    v2047 = v2063;
                    }
                  }
                }
              const v2071 = v2047.passenger;
              const v2072 = v2047.driver;
              const v2073 = v2047.admin;
              null;
              sim_r.txns.push({
                kind: 'from',
                to: v864,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v837,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v825,
                tok: undefined /* Nothing */
                });
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
    tys: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1045], secs: v1047, time: v1046, didSend: v588, from: v1044 } = txn1;
  switch (v1045[0]) {
    case 'Ride_adminInterfereEnd0_373': {
      const v1048 = v1045[1];
      return;
      break;
      }
    case 'Ride_end0_373': {
      const v1108 = v1045[1];
      undefined /* setApiDetails */;
      const v1118 = stdlib.addressEq(v1044, v837);
      const v1119 = stdlib.addressEq(v1044, v864);
      const v1120 = v1118 ? true : v1119;
      stdlib.assert(v1120, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:244:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:26:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:243:26:function exp)', 'at ./index.rsh:236:23:application call to [unknown function] (defined at: ./index.rsh:236:23:function exp)'],
        msg: 'not a participant',
        who: 'Ride_end'
        });
      ;
      const v1145 = null;
      const v1146 = await txn1.getOutput('Ride_end', 'v1145', ctc6, v1145);
      if (v588) {
        stdlib.protect(ctc6, await interact.out(v1108, v1146), {
          at: './index.rsh:243:13:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:248:16:application call to "ret" (defined at: ./index.rsh:247:17:function exp)', 'at ./index.rsh:247:17:application call to [unknown function] (defined at: ./index.rsh:247:17:function exp)'],
          msg: 'out',
          who: 'Ride_end'
          });
        }
      else {
        }
      
      if (v1118) {
        const v1989 = v975;
        const v1990 = v976;
        const v1991 = true;
        const v1992 = v978;
        const v1993 = v979;
        const v1994 = v980;
        const v1998 = v975 ? false : true;
        const v1999 = v976 ? false : v1998;
        const v2000 = v978 ? false : true;
        const v2001 = v1999 ? v2000 : false;
        if (v2001) {
          return;
          }
        else {
          let v2002;
          if (v978) {
            const v2003 = {
              admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              driver: v842,
              passenger: v843
              };
            v2002 = v2003;
            }
          else {
            if (v976) {
              const v2005 = stdlib.safeSub(v843, v849);
              const v2006 = {
                admin: v849,
                driver: v2005,
                passenger: v842
                };
              v2002 = v2006;
              }
            else {
              const v2007 = stdlib.safeSub(v838, v849);
              const v2008 = stdlib.safeAdd(v849, v842);
              const v2009 = {
                admin: v2008,
                driver: v2007,
                passenger: v842
                };
              v2002 = v2009;
              }
            }
          const v2026 = v2002.passenger;
          const v2027 = v2002.driver;
          const v2028 = v2002.admin;
          null;
          const v2029 = stdlib.safeAdd(v2026, v2027);
          const v2030 = stdlib.safeAdd(v2029, v2028);
          const v2031 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
          const v2032 = stdlib.safeAdd(v838, v2031);
          const v2033 = stdlib.eq(v2030, v2032);
          stdlib.assert(v2033, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:314:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
            msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
            who: 'Ride_end'
            });
          ;
          ;
          ;
          return;
          }}
      else {
        const v2034 = v975;
        const v2035 = true;
        const v2036 = v977;
        const v2037 = v978;
        const v2038 = v979;
        const v2039 = v980;
        const v2043 = v975 ? false : true;
        const v2044 = v977 ? false : v2043;
        const v2045 = v978 ? false : true;
        const v2046 = v2044 ? v2045 : false;
        if (v2046) {
          return;
          }
        else {
          let v2047;
          if (v978) {
            const v2048 = {
              admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              driver: v842,
              passenger: v843
              };
            v2047 = v2048;
            }
          else {
            if (v977) {
              const v2050 = stdlib.safeSub(v843, v849);
              const v2051 = {
                admin: v849,
                driver: v2050,
                passenger: v842
                };
              v2047 = v2051;
              }
            else {
              const v2055 = v980 ? v979 : false;
              if (v2055) {
                const v2056 = stdlib.safeSub(v843, v849);
                const v2057 = stdlib.safeAdd(v849, v842);
                const v2058 = {
                  admin: v2057,
                  driver: v2056,
                  passenger: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
                  };
                v2047 = v2058;
                }
              else {
                const v2059 = v979 ? false : true;
                const v2060 = v980 ? false : v2059;
                const v2061 = {
                  admin: v842,
                  driver: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  passenger: v843
                  };
                const v2062 = {
                  admin: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  driver: v842,
                  passenger: v843
                  };
                const v2063 = v2060 ? v2061 : v2062;
                v2047 = v2063;
                }
              }
            }
          const v2071 = v2047.passenger;
          const v2072 = v2047.driver;
          const v2073 = v2047.admin;
          null;
          const v2074 = stdlib.safeAdd(v2071, v2072);
          const v2075 = stdlib.safeAdd(v2074, v2073);
          const v2076 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '2'), v842);
          const v2077 = stdlib.safeAdd(v838, v2076);
          const v2078 = stdlib.eq(v2075, v2077);
          stdlib.assert(v2078, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:314:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
            msg: 'sum of payments must be equal to passengerPrice+deposit+fee',
            who: 'Ride_end'
            });
          ;
          ;
          ;
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
  
  
  const [v825, v837, v838, v842, v843, v849, v864, v871, v872, v873] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc2, ctc2, ctc2]);
  const v895 = ctc.selfAddress();
  const v897 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)'],
    msg: 'in',
    who: 'Ride_start'
    });
  const v898 = stdlib.addressEq(v895, v837);
  const v899 = stdlib.addressEq(v895, v864);
  const v900 = v898 ? true : v899;
  const v901 = stdlib.addressEq(v895, v825);
  const v902 = v900 ? true : v901;
  stdlib.assert(v902, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)'],
    msg: 'not a participant',
    who: 'Ride_start'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v825, v837, v838, v842, v843, v849, v864, v871, v872, v873, v897],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:201:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v913], secs: v915, time: v914, didSend: v274, from: v912 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Ride_start"
        });
      const v917 = stdlib.addressEq(v912, v837);
      const v918 = stdlib.addressEq(v912, v864);
      ;
      const v929 = null;
      const v930 = await txn1.getOutput('Ride_start', 'v929', ctc4, v929);
      
      if (v917) {
        const v2079 = v871;
        const v2080 = true;
        const v2081 = v873;
        const v2085 = v873 ? false : true;
        const v2086 = v871 ? false : v2085;
        if (v2086) {
          sim_r.isHalt = false;
          }
        else {
          if (v871) {
            null;
            const v2156 = false;
            const v2157 = false;
            const v2158 = false;
            const v2159 = false;
            const v2160 = false;
            const v2161 = false;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v837,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v864,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        if (v918) {
          const v2201 = true;
          const v2202 = v872;
          const v2203 = v873;
          const v2207 = v873 ? false : true;
          const v2208 = v872 ? false : v2207;
          if (v2208) {
            sim_r.isHalt = false;
            }
          else {
            if (v872) {
              null;
              const v2278 = false;
              const v2279 = false;
              const v2280 = false;
              const v2281 = false;
              const v2282 = false;
              const v2283 = false;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v837,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v864,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          null;
          const v2323 = v871;
          const v2324 = v872;
          const v2325 = true;
          const v2327 = v871 ? false : true;
          const v2328 = v872 ? v2327 : true;
          const v2330 = v2328 ? false : false;
          if (v2330) {
            sim_r.isHalt = false;
            }
          else {
            const v2331 = v872 ? v871 : false;
            if (v2331) {
              null;
              const v2400 = false;
              const v2401 = false;
              const v2402 = false;
              const v2403 = false;
              const v2404 = false;
              const v2405 = false;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v837,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v864,
                tok: undefined /* Nothing */
                });
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
  const {data: [v913], secs: v915, time: v914, didSend: v274, from: v912 } = txn1;
  undefined /* setApiDetails */;
  const v917 = stdlib.addressEq(v912, v837);
  const v918 = stdlib.addressEq(v912, v864);
  const v919 = v917 ? true : v918;
  const v920 = stdlib.addressEq(v912, v825);
  const v921 = v919 ? true : v920;
  stdlib.assert(v921, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)', 'at ./index.rsh:195:26:application call to [unknown function] (defined at: ./index.rsh:195:26:function exp)'],
    msg: 'not a participant',
    who: 'Ride_start'
    });
  ;
  const v929 = null;
  const v930 = await txn1.getOutput('Ride_start', 'v929', ctc4, v929);
  if (v274) {
    stdlib.protect(ctc4, await interact.out(v913, v930), {
      at: './index.rsh:195:11:application',
      fs: ['at ./index.rsh:195:11:application call to [unknown function] (defined at: ./index.rsh:195:11:function exp)', 'at ./index.rsh:203:14:application call to "ret" (defined at: ./index.rsh:202:15:function exp)', 'at ./index.rsh:202:15:application call to [unknown function] (defined at: ./index.rsh:202:15:function exp)'],
      msg: 'out',
      who: 'Ride_start'
      });
    }
  else {
    }
  
  if (v917) {
    const v2079 = v871;
    const v2080 = true;
    const v2081 = v873;
    const v2085 = v873 ? false : true;
    const v2086 = v871 ? false : v2085;
    if (v2086) {
      return;
      }
    else {
      if (v871) {
        null;
        const v2156 = false;
        const v2157 = false;
        const v2158 = false;
        const v2159 = false;
        const v2160 = false;
        const v2161 = false;
        return;
        }
      else {
        ;
        ;
        return;
        }}}
  else {
    if (v918) {
      const v2201 = true;
      const v2202 = v872;
      const v2203 = v873;
      const v2207 = v873 ? false : true;
      const v2208 = v872 ? false : v2207;
      if (v2208) {
        return;
        }
      else {
        if (v872) {
          null;
          const v2278 = false;
          const v2279 = false;
          const v2280 = false;
          const v2281 = false;
          const v2282 = false;
          const v2283 = false;
          return;
          }
        else {
          ;
          ;
          return;
          }}}
    else {
      null;
      const v2323 = v871;
      const v2324 = v872;
      const v2325 = true;
      const v2327 = v871 ? false : true;
      const v2328 = v872 ? v2327 : true;
      const v2330 = v2328 ? false : false;
      if (v2330) {
        return;
        }
      else {
        const v2331 = v872 ? v871 : false;
        if (v2331) {
          null;
          const v2400 = false;
          const v2401 = false;
          const v2402 = false;
          const v2403 = false;
          const v2404 = false;
          const v2405 = false;
          return;
          }
        else {
          ;
          ;
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
    impure: [`Ride_adminInterfereEnd(byte,byte)void`, `Ride_end()void`, `Ride_start()void`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_2((uint64,uint64))void`, `_reachp_3((uint64))void`, `_reachp_6((uint64,(byte,byte[2])))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64,()))void`, `_reachp_9((uint64))void`],
    pure: [],
    sigs: [`Ride_adminInterfereEnd(byte,byte)void`, `Ride_end()void`, `Ride_start()void`, `_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_2((uint64,uint64))void`, `_reachp_3((uint64))void`, `_reachp_6((uint64,(byte,byte[2])))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64,()))void`, `_reachp_9((uint64))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAEIAgcJ6AdASFBYkE4DEGQmBAABAAEBBJDXM/sxGEEEnihkSSJbNQEkWzUCKWQqZFCCCwQKHSZJBCmJaZUEMpxfqQRKAZOKBE/O1PcEaI6RCASdMBXABKRxPJYEyNBQsQTiV8T5BOxvOQ82GgCOCwQDAG8EJABdA/gAAQQOA9kD7QQZBC8ANhoBFzYaAhc1CzUMJK8pNAwWUQcINAsWUQcIUFBQNQ0hBDQBEkSIBg80DSJbNQ40DVcIAzUPgAR/NbnRNA4WUDQPULA0DogFxTIGIQsMRDQPIlWNAgQJBBNC/6OACwAAAAAAAAAAAQAANQ1C/7IkrzULIQU0ARJEiAZHNAsiWzUMgASvKGSwNAwWULA0DIgFfTIGIQYMRDEANBYSNRgxADQREjUMNBg0DBExADQXEhFEKDULgAgAAAAAAAADoTQLULA0CzUENBhBA64jMgY1DTUPNA8UNBAUETQOFBBBA7kiNQ40FzQWUDQVFlA0FBZQNBMWUDQSFlA0EVA0EBZRBwhQNA8WUQcIUDQOFlEHCFAhDK9QIQUyBjUCNQEpSwFXAH9nKkxXfwdnKDQBFjQCFlBnMRkiEkSIBXw0A0AACoAEFR98dTQEULAjQzEANBcSRCg1DoAIAAAAAAAABC00DlCwNA41BCM0DVcBARc0DVcAARcyBjULNQw1GDUcNBoUNBsUETQcFBA0GRQQQQNNIjUcIjUZNBc0FlA0FRZQNBQWUDQTFlA0EhZQNBFQNBwWUQcIUDQbFlEHCFA0GhZRBwhQNBkWUQcIUDQYFlEHCFA0DBZRBwhQIQQyBkL/OjEANBYSSTUOMQA0ERIRRCg1DYAIAAAAAAAABHk0DVCwNA01BDQOQQJoIzIGNQs1GkL/bDEANRc0DSJbNQ40DSRbNQs0DSENWzUMgAT3cRNNNA4WUDQLFlA0DBZQsDQOiAPONBc0CxZQNAwWUIFWr1AjMgZC/sQxADUWIzQBEkRJVwAgNRdJgSBbNQuBKFs1DDQNIls1DjQNJFs1FYAEx7YK1TQOFlA0FRZQsDQOiAOANBU0DAshDgo1FDQVNBQISTUTiAN5NBU0CwshDgo1EjIGIQYINRg0FzQWUDQVFlA0FBZQNBMWUDQSFlA0GBZQgR6vUCUyBkL+QTEANRElNAESRIgDqTQLIls1DIAE8y0KDDQMFlA0C1cICFCwNAyIAw8yBjQYDEQ0FIgDEiIiIjIGNQ01DjUPNRBC/bglNAESRIgDajQLFzUMgATUDGzWNAwWULA0DIgC1zIGNBgPRDQTNBaIAtQxGYEFEkSIA2kiMgoyCYgDrEL94iEENAESRIgC1zQNFzUOgARxqLGjNA4WULA0DogCmDIGIQsPRDQRMQASRCI1DSs0DRZRBwhQsCMyBjULNRlC/eUhBTQBEkSIAyE0Cxc1DIAEY1dRXDQMFlCwNAyIAlgyBiEGD0Q0ETEAEkQjNQsrNAsWUQcIULAjMgY1DTUOQvz6iAIvgaCNBjQGCDUGNhoBNQ1C/iWIAhs2GgE1DUL+XYgCEDYaATULQv7ViAIFNhoBNQtC/w2IAfo2GgE1DUL8CIgB7zYaATUNQv81iAHkNhoBNQtC/ESIAdk2GgE1C0L/XyIxNBJEIQwxNRJEIjE2EkQiMTcSRIgBuYGGAa8iIkL8vjEZIhJEQvzdNA9XAQI1DUL830L9byMyBjULNRtC/QQ0DEEACiMyBjUNNRBC/EqABPLrhhCwIzIGNQ01DkL8OTQPNBAQQQAqgAS7KS4iNBZQNBFQNBUWULAiIiIiIiI0DTULNQw1GDUZNRo1GzUcQvyyNBM0FogBRjQUNBGIAT9C/mg0GUEAWySvNBQWUDQTFlA1CzQLIQ1bNQ40CyRbNQ00CyJbNQyABPn7r840DhZQNA0WUDQMFlCwNA40DQg0DAg0FSU0FAsIEkQ0DTQRiADtNA40FogA5jQMNBeIAN9C/gg0GjQbEEEAEzQSFjQTNBIJFlA0FBZQNQtC/5Y0GkEAFjQSNBQIFjQVNBIJFlA0FBZQNQtC/+I0G0EAHTQMNBgQQQA0NBI0FAgWNBM0EgkWUCSvUDULQv/bNAw0GBBBADg0EiU0FAsIFjQVNBIJFlAkr1A1C0L/3iSvNBQWUDQTFlA0FBYkr1A0ExZQNAwUNBgUEE01C0L/vSU0FAsWJK9QNBUWUDULQv/LIrIBI7IQsgeyCLOJSIlMCUk1BjIJiAAbiQlJQf/uSTUGiAATiSM1A4lJIhJMNAISEUSJsUL/yTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJVwAgNRdJVyAgNRZJIQdbNRVJIQhbNRRJIQlbNRNJIQpbNRJJV2AgNRFJV4ABFzUcSVeBARc1G0lXggEXNRpJV4MBFzUZSVeEARc1GFeFARc1DIlJVwAgNRdJVyAgNRZJIQdbNRVJIQhbNRRJIQlbNRNJIQpbNRKBYFs1GIk0BjQHSg9B/zRC/zxJVwAgNRdJVyAgNRZJIQdbNRVJIQhbNRRJIQlbNRNJIQpbNRJJV2AgNRFJV4ABFzUQSVeBARc1D1eCARc1DomxsglC/t4=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `566`,
    1001: `566`,
    1002: `566`,
    1003: `567`,
    1004: `567`,
    1005: `568`,
    1006: `569`,
    1007: `569`,
    1008: `570`,
    1009: `570`,
    101: `21`,
    1010: `570`,
    1011: `570`,
    1012: `570`,
    1013: `570`,
    1014: `571`,
    1015: `571`,
    1016: `572`,
    1017: `573`,
    1018: `574`,
    1019: `576`,
    102: `21`,
    1020: `576`,
    1021: `577`,
    1022: `577`,
    1023: `577`,
    1024: `578`,
    1025: `578`,
    1026: `579`,
    1027: `579`,
    1028: `580`,
    1029: `581`,
    103: `21`,
    1030: `582`,
    1031: `582`,
    1032: `583`,
    1033: `583`,
    1034: `584`,
    1035: `585`,
    1036: `589`,
    1037: `590`,
    1038: `590`,
    1039: `591`,
    104: `21`,
    1040: `592`,
    1041: `592`,
    1042: `593`,
    1043: `594`,
    1044: `594`,
    1045: `594`,
    1046: `595`,
    1047: `596`,
    1048: `598`,
    1049: `599`,
    105: `21`,
    1050: `599`,
    1051: `600`,
    1052: `600`,
    1053: `601`,
    1054: `601`,
    1055: `602`,
    1056: `602`,
    1057: `602`,
    1058: `604`,
    1059: `604`,
    106: `21`,
    1060: `605`,
    1061: `605`,
    1062: `606`,
    1063: `607`,
    1064: `608`,
    1065: `608`,
    1066: `608`,
    1067: `609`,
    1068: `609`,
    1069: `610`,
    107: `21`,
    1070: `611`,
    1071: `611`,
    1072: `612`,
    1073: `612`,
    1074: `612`,
    1075: `612`,
    1076: `612`,
    1077: `612`,
    1078: `613`,
    1079: `613`,
    108: `21`,
    1080: `614`,
    1081: `615`,
    1082: `616`,
    1083: `618`,
    1084: `618`,
    1085: `619`,
    1086: `619`,
    1087: `619`,
    1088: `620`,
    1089: `620`,
    109: `21`,
    1090: `621`,
    1091: `621`,
    1092: `622`,
    1093: `623`,
    1094: `624`,
    1095: `624`,
    1096: `625`,
    1097: `625`,
    1098: `626`,
    1099: `627`,
    11: `2`,
    110: `22`,
    1100: `631`,
    1101: `632`,
    1102: `632`,
    1103: `633`,
    1104: `634`,
    1105: `634`,
    1106: `635`,
    1107: `636`,
    1108: `636`,
    1109: `636`,
    111: `22`,
    1110: `637`,
    1111: `638`,
    1112: `640`,
    1113: `641`,
    1114: `641`,
    1115: `642`,
    1116: `642`,
    1117: `643`,
    1118: `643`,
    1119: `644`,
    112: `22`,
    1120: `644`,
    1121: `644`,
    1122: `646`,
    1123: `646`,
    1124: `646`,
    1125: `647`,
    1126: `647`,
    1127: `647`,
    1128: `647`,
    1129: `649`,
    113: `23`,
    1130: `649`,
    1131: `650`,
    1132: `651`,
    1133: `651`,
    1134: `652`,
    1135: `652`,
    1136: `652`,
    1137: `653`,
    1138: `653`,
    1139: `654`,
    114: `23`,
    1140: `654`,
    1141: `654`,
    1142: `656`,
    1143: `656`,
    1144: `656`,
    1145: `657`,
    1146: `657`,
    1147: `657`,
    1148: `658`,
    1149: `658`,
    115: `23`,
    1150: `659`,
    1151: `659`,
    1152: `659`,
    1153: `661`,
    1154: `661`,
    1155: `661`,
    1156: `662`,
    1157: `662`,
    1158: `662`,
    1159: `663`,
    116: `23`,
    1160: `663`,
    1161: `664`,
    1162: `664`,
    1163: `664`,
    1164: `666`,
    1165: `666`,
    1166: `666`,
    1167: `667`,
    1168: `667`,
    1169: `667`,
    117: `23`,
    1170: `668`,
    1171: `668`,
    1172: `669`,
    1173: `669`,
    1174: `669`,
    1175: `671`,
    1176: `671`,
    1177: `671`,
    1178: `672`,
    1179: `672`,
    118: `23`,
    1180: `672`,
    1181: `673`,
    1182: `673`,
    1183: `674`,
    1184: `674`,
    1185: `674`,
    1186: `676`,
    1187: `676`,
    1188: `676`,
    1189: `677`,
    119: `23`,
    1190: `677`,
    1191: `677`,
    1192: `678`,
    1193: `678`,
    1194: `679`,
    1195: `679`,
    1196: `679`,
    1197: `681`,
    1198: `681`,
    1199: `681`,
    12: `2`,
    120: `23`,
    1200: `682`,
    1201: `682`,
    1202: `682`,
    1203: `683`,
    1204: `683`,
    1205: `684`,
    1206: `684`,
    1207: `684`,
    1208: `686`,
    1209: `686`,
    121: `23`,
    1210: `686`,
    1211: `687`,
    1212: `687`,
    1213: `687`,
    1214: `688`,
    1215: `688`,
    1216: `689`,
    1217: `689`,
    1218: `689`,
    1219: `691`,
    122: `23`,
    1220: `692`,
    1221: `692`,
    1222: `693`,
    1223: `694`,
    1224: `695`,
    1225: `695`,
    1226: `696`,
    1227: `696`,
    1228: `697`,
    1229: `698`,
    123: `23`,
    1230: `699`,
    1231: `700`,
    1232: `700`,
    1233: `701`,
    1234: `702`,
    1235: `703`,
    1236: `704`,
    1237: `704`,
    1238: `705`,
    1239: `706`,
    124: `23`,
    1240: `707`,
    1241: `707`,
    1242: `707`,
    1243: `708`,
    1244: `708`,
    1245: `708`,
    1246: `709`,
    1247: `710`,
    1248: `711`,
    1249: `712`,
    125: `23`,
    1250: `712`,
    1251: `712`,
    1252: `714`,
    1253: `714`,
    1254: `715`,
    1255: `716`,
    1256: `717`,
    1257: `719`,
    1258: `719`,
    1259: `719`,
    126: `23`,
    1260: `721`,
    1261: `721`,
    1262: `722`,
    1263: `722`,
    1264: `722`,
    1265: `723`,
    1266: `723`,
    1267: `724`,
    1268: `724`,
    1269: `724`,
    127: `23`,
    1270: `726`,
    1271: `726`,
    1272: `726`,
    1273: `728`,
    1274: `729`,
    1275: `729`,
    1276: `730`,
    1277: `730`,
    1278: `731`,
    1279: `731`,
    128: `23`,
    1280: `732`,
    1281: `732`,
    1282: `732`,
    1283: `734`,
    1284: `734`,
    1285: `735`,
    1286: `735`,
    1287: `735`,
    1288: `736`,
    1289: `737`,
    129: `23`,
    1290: `737`,
    1291: `738`,
    1292: `738`,
    1293: `739`,
    1294: `739`,
    1295: `740`,
    1296: `740`,
    1297: `740`,
    1298: `742`,
    1299: `742`,
    13: `2`,
    130: `23`,
    1300: `742`,
    1301: `742`,
    1302: `742`,
    1303: `742`,
    1304: `743`,
    1305: `745`,
    1306: `746`,
    1307: `746`,
    1308: `747`,
    1309: `747`,
    131: `23`,
    1310: `748`,
    1311: `748`,
    1312: `749`,
    1313: `749`,
    1314: `749`,
    1315: `751`,
    1316: `751`,
    1317: `752`,
    1318: `752`,
    1319: `753`,
    132: `23`,
    1320: `754`,
    1321: `754`,
    1322: `754`,
    1323: `755`,
    1324: `755`,
    1325: `755`,
    1326: `755`,
    1327: `755`,
    1328: `755`,
    1329: `756`,
    133: `23`,
    1330: `756`,
    1331: `757`,
    1332: `758`,
    1333: `758`,
    1334: `759`,
    1335: `760`,
    1336: `760`,
    1337: `761`,
    1338: `762`,
    1339: `763`,
    134: `23`,
    1340: `765`,
    1341: `766`,
    1342: `767`,
    1343: `768`,
    1344: `769`,
    1345: `770`,
    1346: `771`,
    1347: `771`,
    1348: `772`,
    1349: `772`,
    135: `23`,
    1350: `773`,
    1351: `773`,
    1352: `774`,
    1353: `774`,
    1354: `775`,
    1355: `775`,
    1356: `776`,
    1357: `776`,
    1358: `777`,
    1359: `777`,
    136: `23`,
    1360: `778`,
    1361: `778`,
    1362: `779`,
    1363: `779`,
    1364: `779`,
    1365: `781`,
    1366: `781`,
    1367: `783`,
    1368: `783`,
    1369: `784`,
    137: `25`,
    1370: `784`,
    1371: `784`,
    1372: `785`,
    1373: `785`,
    1374: `787`,
    1375: `787`,
    1376: `788`,
    1377: `788`,
    1378: `788`,
    1379: `789`,
    138: `27`,
    1380: `789`,
    1381: `789`,
    1382: `791`,
    1383: `791`,
    1384: `792`,
    1385: `792`,
    1386: `792`,
    1387: `793`,
    1388: `794`,
    1389: `795`,
    139: `27`,
    1390: `795`,
    1391: `796`,
    1392: `797`,
    1393: `798`,
    1394: `798`,
    1395: `799`,
    1396: `800`,
    1397: `801`,
    1398: `801`,
    1399: `803`,
    14: `2`,
    140: `27`,
    1400: `803`,
    1401: `804`,
    1402: `804`,
    1403: `805`,
    1404: `806`,
    1405: `806`,
    1406: `807`,
    1407: `807`,
    1408: `808`,
    1409: `809`,
    141: `28`,
    1410: `810`,
    1411: `810`,
    1412: `811`,
    1413: `811`,
    1414: `812`,
    1415: `813`,
    1416: `814`,
    1417: `814`,
    1418: `815`,
    1419: `815`,
    142: `29`,
    1420: `815`,
    1421: `815`,
    1422: `815`,
    1423: `815`,
    1424: `816`,
    1425: `816`,
    1426: `817`,
    1427: `818`,
    1428: `819`,
    1429: `819`,
    143: `29`,
    1430: `820`,
    1431: `821`,
    1432: `822`,
    1433: `822`,
    1434: `823`,
    1435: `824`,
    1436: `825`,
    1437: `827`,
    1438: `827`,
    1439: `828`,
    144: `29`,
    1440: `828`,
    1441: `829`,
    1442: `830`,
    1443: `830`,
    1444: `831`,
    1445: `832`,
    1446: `832`,
    1447: `833`,
    1448: `834`,
    1449: `834`,
    145: `30`,
    1450: `835`,
    1451: `836`,
    1452: `837`,
    1453: `838`,
    1454: `842`,
    1455: `842`,
    1456: `844`,
    1457: `844`,
    1458: `845`,
    1459: `845`,
    146: `31`,
    1460: `845`,
    1461: `846`,
    1462: `846`,
    1463: `848`,
    1464: `848`,
    1465: `849`,
    1466: `849`,
    1467: `849`,
    1468: `850`,
    1469: `850`,
    147: `31`,
    1470: `852`,
    1471: `852`,
    1472: `853`,
    1473: `853`,
    1474: `853`,
    1475: `854`,
    1476: `854`,
    1477: `854`,
    1478: `856`,
    1479: `856`,
    148: `32`,
    1480: `857`,
    1481: `857`,
    1482: `858`,
    1483: `859`,
    1484: `859`,
    1485: `859`,
    1486: `860`,
    1487: `860`,
    1488: `861`,
    1489: `862`,
    149: `32`,
    1490: `862`,
    1491: `863`,
    1492: `863`,
    1493: `864`,
    1494: `865`,
    1495: `866`,
    1496: `867`,
    1497: `867`,
    1498: `868`,
    1499: `869`,
    15: `2`,
    150: `34`,
    1500: `870`,
    1501: `870`,
    1502: `872`,
    1503: `872`,
    1504: `872`,
    1505: `874`,
    1506: `874`,
    1507: `875`,
    1508: `875`,
    1509: `875`,
    151: `35`,
    1510: `876`,
    1511: `876`,
    1512: `877`,
    1513: `877`,
    1514: `878`,
    1515: `879`,
    1516: `880`,
    1517: `880`,
    1518: `881`,
    1519: `881`,
    152: `36`,
    1520: `882`,
    1521: `883`,
    1522: `884`,
    1523: `885`,
    1524: `885`,
    1525: `886`,
    1526: `887`,
    1527: `888`,
    1528: `888`,
    1529: `890`,
    153: `37`,
    1530: `890`,
    1531: `890`,
    1532: `892`,
    1533: `892`,
    1534: `893`,
    1535: `893`,
    1536: `893`,
    1537: `894`,
    1538: `894`,
    1539: `895`,
    154: `37`,
    1540: `895`,
    1541: `896`,
    1542: `897`,
    1543: `897`,
    1544: `897`,
    1545: `898`,
    1546: `898`,
    1547: `899`,
    1548: `899`,
    1549: `900`,
    155: `38`,
    1550: `901`,
    1551: `902`,
    1552: `902`,
    1553: `903`,
    1554: `903`,
    1555: `904`,
    1556: `905`,
    1557: `906`,
    1558: `907`,
    1559: `908`,
    156: `39`,
    1560: `909`,
    1561: `910`,
    1562: `910`,
    1563: `913`,
    1564: `913`,
    1565: `913`,
    1566: `915`,
    1567: `915`,
    1568: `916`,
    1569: `916`,
    157: `39`,
    1570: `917`,
    1571: `918`,
    1572: `918`,
    1573: `918`,
    1574: `919`,
    1575: `919`,
    1576: `920`,
    1577: `921`,
    1578: `921`,
    1579: `922`,
    158: `39`,
    1580: `923`,
    1581: `924`,
    1582: `925`,
    1583: `925`,
    1584: `926`,
    1585: `926`,
    1586: `927`,
    1587: `928`,
    1588: `929`,
    1589: `930`,
    159: `40`,
    1590: `931`,
    1591: `932`,
    1592: `933`,
    1593: `933`,
    1594: `935`,
    1595: `935`,
    1596: `935`,
    1597: `937`,
    1598: `938`,
    1599: `939`,
    16: `2`,
    160: `40`,
    1600: `939`,
    1601: `940`,
    1602: `941`,
    1603: `942`,
    1604: `942`,
    1605: `943`,
    1606: `944`,
    1607: `945`,
    1608: `945`,
    1609: `946`,
    161: `41`,
    1610: `947`,
    1611: `948`,
    1612: `949`,
    1613: `950`,
    1614: `950`,
    1615: `951`,
    1616: `952`,
    1617: `953`,
    1618: `953`,
    1619: `954`,
    162: `42`,
    1620: `955`,
    1621: `955`,
    1622: `956`,
    1623: `957`,
    1624: `958`,
    1625: `959`,
    1626: `959`,
    1627: `960`,
    1628: `960`,
    1629: `960`,
    163: `42`,
    1630: `962`,
    1631: `963`,
    1632: `963`,
    1633: `964`,
    1634: `965`,
    1635: `966`,
    1636: `967`,
    1637: `968`,
    1638: `969`,
    1639: `969`,
    164: `42`,
    1640: `970`,
    1641: `971`,
    1642: `972`,
    1643: `972`,
    1644: `973`,
    1645: `973`,
    1646: `973`,
    1647: `975`,
    1648: `976`,
    1649: `976`,
    165: `43`,
    1650: `977`,
    1651: `978`,
    1652: `978`,
    1653: `979`,
    1654: `979`,
    1655: `980`,
    1656: `980`,
    1657: `981`,
    1658: `982`,
    1659: `984`,
    166: `44`,
    1660: `985`,
    1661: `987`,
    1662: `988`,
    1663: `989`,
    1664: `990`,
    1665: `990`,
    1666: `991`,
    1667: `991`,
    1668: `992`,
    1669: `992`,
    167: `45`,
    1670: `992`,
    1671: `993`,
    1672: `995`,
    1673: `996`,
    1674: `997`,
    1675: `997`,
    1676: `997`,
    1677: `998`,
    1678: `999`,
    1679: `999`,
    168: `46`,
    1680: `1000`,
    1681: `1000`,
    1682: `1000`,
    1683: `1001`,
    1684: `1003`,
    1685: `1004`,
    1686: `1004`,
    1687: `1005`,
    1688: `1007`,
    1689: `1008`,
    169: `46`,
    1690: `1009`,
    1691: `1010`,
    1692: `1011`,
    1693: `1011`,
    1694: `1012`,
    1695: `1013`,
    1696: `1014`,
    1697: `1015`,
    1698: `1017`,
    1699: `1018`,
    17: `2`,
    170: `48`,
    1700: `1018`,
    1701: `1018`,
    1702: `1021`,
    1703: `1021`,
    1704: `1022`,
    1705: `1022`,
    1706: `1023`,
    1707: `1024`,
    1708: `1025`,
    1709: `1026`,
    171: `48`,
    1710: `1026`,
    1711: `1027`,
    1712: `1028`,
    1713: `1028`,
    1714: `1029`,
    1715: `1029`,
    1716: `1030`,
    1717: `1030`,
    1718: `1031`,
    1719: `1032`,
    172: `49`,
    1720: `1033`,
    1721: `1033`,
    1722: `1034`,
    1723: `1035`,
    1724: `1036`,
    1725: `1037`,
    1726: `1037`,
    1727: `1038`,
    1728: `1039`,
    1729: `1040`,
    173: `49`,
    1730: `1042`,
    1731: `1043`,
    1732: `1043`,
    1733: `1043`,
    1734: `1044`,
    1735: `1044`,
    1736: `1045`,
    1737: `1046`,
    1738: `1046`,
    1739: `1046`,
    174: `50`,
    1740: `1047`,
    1741: `1047`,
    1742: `1048`,
    1743: `1049`,
    1744: `1049`,
    1745: `1050`,
    1746: `1051`,
    1747: `1051`,
    1748: `1052`,
    1749: `1053`,
    175: `51`,
    1750: `1053`,
    1751: `1054`,
    1752: `1055`,
    1753: `1055`,
    1754: `1056`,
    1755: `1057`,
    1756: `1057`,
    1757: `1058`,
    1758: `1059`,
    1759: `1059`,
    176: `52`,
    1760: `1060`,
    1761: `1061`,
    1762: `1061`,
    1763: `1062`,
    1764: `1063`,
    1765: `1063`,
    1766: `1064`,
    1767: `1065`,
    1768: `1065`,
    1769: `1065`,
    177: `52`,
    1770: `1066`,
    1771: `1066`,
    1772: `1067`,
    1773: `1068`,
    1774: `1068`,
    1775: `1068`,
    1776: `1069`,
    1777: `1070`,
    1778: `1070`,
    1779: `1071`,
    178: `52`,
    1780: `1072`,
    1781: `1072`,
    1782: `1072`,
    1783: `1073`,
    1784: `1074`,
    1785: `1074`,
    1786: `1075`,
    1787: `1076`,
    1788: `1076`,
    1789: `1076`,
    179: `53`,
    1790: `1077`,
    1791: `1078`,
    1792: `1078`,
    1793: `1079`,
    1794: `1080`,
    1795: `1080`,
    1796: `1080`,
    1797: `1081`,
    1798: `1082`,
    1799: `1082`,
    18: `2`,
    180: `53`,
    1800: `1083`,
    1801: `1084`,
    1802: `1084`,
    1803: `1084`,
    1804: `1085`,
    1805: `1086`,
    1806: `1086`,
    1807: `1087`,
    1808: `1087`,
    1809: `1087`,
    181: `54`,
    1810: `1088`,
    1811: `1089`,
    1812: `1089`,
    1813: `1090`,
    1814: `1092`,
    1815: `1093`,
    1816: `1093`,
    1817: `1093`,
    1818: `1094`,
    1819: `1094`,
    182: `55`,
    1820: `1095`,
    1821: `1096`,
    1822: `1096`,
    1823: `1096`,
    1824: `1097`,
    1825: `1097`,
    1826: `1098`,
    1827: `1099`,
    1828: `1099`,
    1829: `1100`,
    183: `56`,
    1830: `1101`,
    1831: `1101`,
    1832: `1102`,
    1833: `1103`,
    1834: `1103`,
    1835: `1104`,
    1836: `1105`,
    1837: `1105`,
    1838: `1106`,
    1839: `1107`,
    184: `56`,
    1840: `1107`,
    1841: `1108`,
    1842: `1109`,
    1843: `1109`,
    1844: `1110`,
    1845: `1111`,
    1846: `1111`,
    1847: `1112`,
    1848: `1113`,
    1849: `1113`,
    185: `57`,
    1850: `1114`,
    1851: `1114`,
    1852: `1115`,
    1853: `1116`,
    1854: `1116`,
    1855: `1117`,
    1856: `1119`,
    1857: `1119`,
    1858: `1120`,
    1859: `1120`,
    186: `57`,
    1860: `1121`,
    1861: `1122`,
    1862: `1123`,
    1863: `1123`,
    1864: `1123`,
    1865: `1124`,
    1866: `1124`,
    1867: `1124`,
    1868: `1126`,
    1869: `1127`,
    187: `58`,
    1870: `1127`,
    1871: `1127`,
    1872: `1128`,
    1873: `1128`,
    1874: `1129`,
    1875: `1130`,
    1876: `1130`,
    1877: `1130`,
    1878: `1131`,
    1879: `1131`,
    188: `58`,
    1880: `1132`,
    1881: `1133`,
    1882: `1133`,
    1883: `1134`,
    1884: `1135`,
    1885: `1135`,
    1886: `1136`,
    1887: `1137`,
    1888: `1137`,
    1889: `1138`,
    189: `58`,
    1890: `1139`,
    1891: `1139`,
    1892: `1140`,
    1893: `1141`,
    1894: `1141`,
    1895: `1142`,
    1896: `1143`,
    1897: `1143`,
    1898: `1144`,
    1899: `1145`,
    19: `2`,
    190: `59`,
    1900: `1145`,
    1901: `1146`,
    1902: `1147`,
    1903: `1147`,
    1904: `1148`,
    1905: `1149`,
    1906: `1149`,
    1907: `1149`,
    1908: `1150`,
    1909: `1150`,
    191: `59`,
    1910: `1151`,
    1911: `1152`,
    1912: `1152`,
    1913: `1152`,
    1914: `1153`,
    1915: `1154`,
    1916: `1154`,
    1917: `1155`,
    1918: `1156`,
    1919: `1156`,
    192: `60`,
    1920: `1156`,
    1921: `1157`,
    1922: `1158`,
    1923: `1158`,
    1924: `1159`,
    1925: `1159`,
    1926: `1159`,
    1927: `1160`,
    1928: `1161`,
    1929: `1161`,
    193: `60`,
    1930: `1162`,
    1931: `1164`,
    1932: `1165`,
    1933: `1165`,
    1934: `1166`,
    194: `60`,
    195: `60`,
    196: `60`,
    197: `60`,
    198: `61`,
    199: `61`,
    2: `2`,
    20: `2`,
    200: `62`,
    201: `63`,
    202: `64`,
    203: `64`,
    204: `65`,
    205: `66`,
    206: `68`,
    207: `68`,
    208: `69`,
    209: `69`,
    21: `2`,
    210: `69`,
    211: `70`,
    212: `70`,
    213: `71`,
    214: `71`,
    215: `72`,
    216: `73`,
    217: `74`,
    218: `74`,
    219: `75`,
    22: `2`,
    220: `76`,
    221: `77`,
    222: `77`,
    223: `77`,
    224: `77`,
    225: `77`,
    226: `77`,
    227: `78`,
    228: `78`,
    229: `78`,
    23: `2`,
    230: `81`,
    231: `81`,
    232: `81`,
    233: `81`,
    234: `81`,
    235: `81`,
    236: `81`,
    237: `81`,
    238: `81`,
    239: `81`,
    24: `2`,
    240: `81`,
    241: `81`,
    242: `81`,
    243: `82`,
    244: `82`,
    245: `83`,
    246: `83`,
    247: `83`,
    248: `86`,
    249: `87`,
    25: `2`,
    250: `88`,
    251: `88`,
    252: `90`,
    253: `90`,
    254: `91`,
    255: `91`,
    256: `92`,
    257: `93`,
    258: `94`,
    259: `94`,
    26: `2`,
    260: `94`,
    261: `95`,
    262: `95`,
    263: `96`,
    264: `97`,
    265: `98`,
    266: `98`,
    267: `99`,
    268: `99`,
    269: `99`,
    27: `2`,
    270: `99`,
    271: `99`,
    272: `99`,
    273: `100`,
    274: `100`,
    275: `101`,
    276: `102`,
    277: `103`,
    278: `105`,
    279: `105`,
    28: `2`,
    280: `106`,
    281: `106`,
    282: `106`,
    283: `107`,
    284: `107`,
    285: `108`,
    286: `108`,
    287: `109`,
    288: `110`,
    289: `112`,
    29: `2`,
    290: `112`,
    291: `113`,
    292: `113`,
    293: `114`,
    294: `115`,
    295: `115`,
    296: `116`,
    297: `116`,
    298: `117`,
    299: `117`,
    3: `2`,
    30: `2`,
    300: `118`,
    301: `119`,
    302: `119`,
    303: `120`,
    304: `120`,
    305: `121`,
    306: `121`,
    307: `122`,
    308: `123`,
    309: `123`,
    31: `2`,
    310: `124`,
    311: `124`,
    312: `125`,
    313: `126`,
    314: `127`,
    315: `133`,
    316: `134`,
    317: `134`,
    318: `135`,
    319: `135`,
    32: `4`,
    320: `135`,
    321: `135`,
    322: `135`,
    323: `135`,
    324: `135`,
    325: `135`,
    326: `135`,
    327: `135`,
    328: `136`,
    329: `136`,
    33: `4`,
    330: `137`,
    331: `138`,
    332: `139`,
    333: `139`,
    334: `140`,
    335: `140`,
    336: `141`,
    337: `141`,
    338: `142`,
    339: `142`,
    34: `5`,
    340: `142`,
    341: `143`,
    342: `144`,
    343: `144`,
    344: `145`,
    345: `145`,
    346: `146`,
    347: `146`,
    348: `148`,
    349: `148`,
    35: `5`,
    350: `149`,
    351: `150`,
    352: `150`,
    353: `151`,
    354: `152`,
    355: `153`,
    356: `153`,
    357: `154`,
    358: `155`,
    359: `156`,
    36: `5`,
    360: `156`,
    361: `156`,
    362: `157`,
    363: `158`,
    364: `158`,
    365: `160`,
    366: `160`,
    367: `161`,
    368: `161`,
    369: `162`,
    37: `6`,
    370: `163`,
    371: `163`,
    372: `164`,
    373: `165`,
    374: `166`,
    375: `166`,
    376: `167`,
    377: `168`,
    378: `169`,
    379: `169`,
    38: `7`,
    380: `170`,
    381: `171`,
    382: `172`,
    383: `172`,
    384: `173`,
    385: `174`,
    386: `175`,
    387: `175`,
    388: `176`,
    389: `177`,
    39: `8`,
    390: `177`,
    391: `178`,
    392: `179`,
    393: `179`,
    394: `179`,
    395: `180`,
    396: `181`,
    397: `181`,
    398: `182`,
    399: `183`,
    4: `2`,
    40: `9`,
    400: `183`,
    401: `183`,
    402: `184`,
    403: `185`,
    404: `185`,
    405: `186`,
    406: `187`,
    407: `187`,
    408: `187`,
    409: `188`,
    41: `10`,
    410: `189`,
    411: `189`,
    412: `190`,
    413: `191`,
    414: `192`,
    415: `192`,
    416: `193`,
    417: `193`,
    418: `195`,
    419: `195`,
    42: `11`,
    420: `196`,
    421: `196`,
    422: `197`,
    423: `198`,
    424: `198`,
    425: `199`,
    426: `199`,
    427: `199`,
    428: `200`,
    429: `201`,
    43: `11`,
    430: `202`,
    431: `203`,
    432: `203`,
    433: `203`,
    434: `204`,
    435: `205`,
    436: `206`,
    437: `206`,
    438: `207`,
    439: `208`,
    44: `12`,
    440: `208`,
    441: `209`,
    442: `210`,
    443: `211`,
    444: `212`,
    445: `212`,
    446: `213`,
    447: `214`,
    448: `215`,
    449: `217`,
    45: `13`,
    450: `217`,
    451: `217`,
    452: `219`,
    453: `219`,
    454: `220`,
    455: `220`,
    456: `220`,
    457: `222`,
    458: `222`,
    459: `222`,
    46: `14`,
    460: `222`,
    461: `222`,
    462: `222`,
    463: `223`,
    464: `223`,
    465: `224`,
    466: `225`,
    467: `227`,
    468: `228`,
    469: `230`,
    47: `14`,
    470: `230`,
    471: `231`,
    472: `231`,
    473: `232`,
    474: `233`,
    475: `240`,
    476: `241`,
    477: `241`,
    478: `242`,
    479: `242`,
    48: `15`,
    480: `242`,
    481: `242`,
    482: `242`,
    483: `242`,
    484: `242`,
    485: `242`,
    486: `242`,
    487: `242`,
    488: `243`,
    489: `243`,
    49: `16`,
    490: `244`,
    491: `245`,
    492: `246`,
    493: `246`,
    494: `247`,
    495: `247`,
    496: `248`,
    497: `249`,
    498: `249`,
    499: `250`,
    5: `2`,
    50: `17`,
    500: `250`,
    501: `250`,
    502: `251`,
    503: `252`,
    504: `252`,
    505: `253`,
    506: `253`,
    507: `253`,
    508: `254`,
    509: `255`,
    51: `18`,
    510: `255`,
    511: `256`,
    512: `256`,
    513: `257`,
    514: `257`,
    515: `258`,
    516: `258`,
    517: `259`,
    518: `259`,
    519: `261`,
    52: `19`,
    520: `261`,
    521: `262`,
    522: `263`,
    523: `263`,
    524: `264`,
    525: `265`,
    526: `266`,
    527: `266`,
    528: `267`,
    529: `268`,
    53: `21`,
    530: `269`,
    531: `269`,
    532: `270`,
    533: `271`,
    534: `272`,
    535: `272`,
    536: `272`,
    537: `273`,
    538: `274`,
    539: `274`,
    54: `21`,
    540: `275`,
    541: `276`,
    542: `276`,
    543: `278`,
    544: `278`,
    545: `279`,
    546: `279`,
    547: `280`,
    548: `281`,
    549: `281`,
    55: `21`,
    550: `282`,
    551: `283`,
    552: `284`,
    553: `284`,
    554: `285`,
    555: `286`,
    556: `287`,
    557: `287`,
    558: `288`,
    559: `289`,
    56: `21`,
    560: `290`,
    561: `290`,
    562: `291`,
    563: `292`,
    564: `293`,
    565: `293`,
    566: `294`,
    567: `295`,
    568: `295`,
    569: `296`,
    57: `21`,
    570: `297`,
    571: `297`,
    572: `297`,
    573: `298`,
    574: `299`,
    575: `299`,
    576: `300`,
    577: `301`,
    578: `301`,
    579: `301`,
    58: `21`,
    580: `302`,
    581: `303`,
    582: `303`,
    583: `304`,
    584: `305`,
    585: `305`,
    586: `305`,
    587: `306`,
    588: `307`,
    589: `307`,
    59: `21`,
    590: `308`,
    591: `309`,
    592: `309`,
    593: `309`,
    594: `310`,
    595: `311`,
    596: `311`,
    597: `312`,
    598: `313`,
    599: `313`,
    6: `2`,
    60: `21`,
    600: `313`,
    601: `314`,
    602: `315`,
    603: `315`,
    604: `316`,
    605: `317`,
    606: `317`,
    607: `317`,
    608: `318`,
    609: `319`,
    61: `21`,
    610: `319`,
    611: `320`,
    612: `320`,
    613: `321`,
    614: `321`,
    615: `321`,
    616: `323`,
    617: `323`,
    618: `324`,
    619: `324`,
    62: `21`,
    620: `325`,
    621: `326`,
    622: `327`,
    623: `327`,
    624: `328`,
    625: `328`,
    626: `329`,
    627: `329`,
    628: `330`,
    629: `331`,
    63: `21`,
    630: `332`,
    631: `339`,
    632: `340`,
    633: `340`,
    634: `341`,
    635: `341`,
    636: `341`,
    637: `341`,
    638: `341`,
    639: `341`,
    64: `21`,
    640: `341`,
    641: `341`,
    642: `341`,
    643: `341`,
    644: `342`,
    645: `342`,
    646: `343`,
    647: `344`,
    648: `345`,
    649: `345`,
    65: `21`,
    650: `346`,
    651: `346`,
    652: `347`,
    653: `347`,
    654: `348`,
    655: `348`,
    656: `348`,
    657: `349`,
    658: `350`,
    659: `350`,
    66: `21`,
    660: `351`,
    661: `351`,
    662: `352`,
    663: `352`,
    664: `353`,
    665: `353`,
    666: `353`,
    667: `355`,
    668: `355`,
    669: `356`,
    67: `21`,
    670: `356`,
    671: `357`,
    672: `357`,
    673: `358`,
    674: `359`,
    675: `360`,
    676: `360`,
    677: `361`,
    678: `361`,
    679: `362`,
    68: `21`,
    680: `363`,
    681: `364`,
    682: `364`,
    683: `365`,
    684: `365`,
    685: `366`,
    686: `366`,
    687: `367`,
    688: `368`,
    689: `368`,
    69: `21`,
    690: `369`,
    691: `369`,
    692: `369`,
    693: `369`,
    694: `369`,
    695: `369`,
    696: `370`,
    697: `370`,
    698: `371`,
    699: `372`,
    7: `2`,
    70: `21`,
    700: `373`,
    701: `373`,
    702: `374`,
    703: `375`,
    704: `376`,
    705: `376`,
    706: `377`,
    707: `378`,
    708: `379`,
    709: `381`,
    71: `21`,
    710: `381`,
    711: `382`,
    712: `382`,
    713: `382`,
    714: `384`,
    715: `384`,
    716: `385`,
    717: `385`,
    718: `386`,
    719: `387`,
    72: `21`,
    720: `388`,
    721: `388`,
    722: `389`,
    723: `390`,
    724: `391`,
    725: `391`,
    726: `392`,
    727: `393`,
    728: `394`,
    729: `395`,
    73: `21`,
    730: `395`,
    731: `396`,
    732: `396`,
    733: `396`,
    734: `398`,
    735: `398`,
    736: `399`,
    737: `399`,
    738: `400`,
    739: `401`,
    74: `21`,
    740: `401`,
    741: `402`,
    742: `403`,
    743: `405`,
    744: `406`,
    745: `406`,
    746: `406`,
    747: `407`,
    748: `407`,
    749: `408`,
    75: `21`,
    750: `409`,
    751: `409`,
    752: `410`,
    753: `411`,
    754: `411`,
    755: `412`,
    756: `412`,
    757: `413`,
    758: `414`,
    759: `414`,
    76: `21`,
    760: `415`,
    761: `415`,
    762: `416`,
    763: `417`,
    764: `418`,
    765: `418`,
    766: `419`,
    767: `419`,
    768: `420`,
    769: `421`,
    77: `21`,
    770: `422`,
    771: `422`,
    772: `423`,
    773: `423`,
    774: `423`,
    775: `423`,
    776: `423`,
    777: `423`,
    778: `424`,
    779: `424`,
    78: `21`,
    780: `425`,
    781: `426`,
    782: `427`,
    783: `427`,
    784: `428`,
    785: `429`,
    786: `430`,
    787: `432`,
    788: `432`,
    789: `433`,
    79: `21`,
    790: `433`,
    791: `433`,
    792: `434`,
    793: `434`,
    794: `435`,
    795: `435`,
    796: `436`,
    797: `437`,
    798: `437`,
    799: `438`,
    8: `2`,
    80: `21`,
    800: `439`,
    801: `439`,
    802: `440`,
    803: `440`,
    804: `441`,
    805: `441`,
    806: `442`,
    807: `443`,
    808: `444`,
    809: `444`,
    81: `21`,
    810: `445`,
    811: `445`,
    812: `445`,
    813: `448`,
    814: `448`,
    815: `449`,
    816: `449`,
    817: `450`,
    818: `451`,
    819: `451`,
    82: `21`,
    820: `452`,
    821: `453`,
    822: `453`,
    823: `454`,
    824: `454`,
    825: `455`,
    826: `455`,
    827: `456`,
    828: `457`,
    829: `457`,
    83: `21`,
    830: `459`,
    831: `459`,
    832: `460`,
    833: `460`,
    834: `461`,
    835: `462`,
    836: `462`,
    837: `463`,
    838: `464`,
    839: `465`,
    84: `21`,
    840: `465`,
    841: `466`,
    842: `467`,
    843: `468`,
    844: `468`,
    845: `469`,
    846: `470`,
    847: `471`,
    848: `471`,
    849: `472`,
    85: `21`,
    850: `473`,
    851: `474`,
    852: `474`,
    853: `475`,
    854: `476`,
    855: `477`,
    856: `477`,
    857: `478`,
    858: `479`,
    859: `480`,
    86: `21`,
    860: `481`,
    861: `481`,
    862: `482`,
    863: `482`,
    864: `482`,
    865: `484`,
    866: `484`,
    867: `485`,
    868: `485`,
    869: `486`,
    87: `21`,
    870: `487`,
    871: `487`,
    872: `488`,
    873: `489`,
    874: `490`,
    875: `490`,
    876: `490`,
    877: `491`,
    878: `491`,
    879: `492`,
    88: `21`,
    880: `493`,
    881: `494`,
    882: `494`,
    883: `495`,
    884: `495`,
    885: `495`,
    886: `495`,
    887: `495`,
    888: `495`,
    889: `496`,
    89: `21`,
    890: `496`,
    891: `497`,
    892: `498`,
    893: `499`,
    894: `499`,
    895: `500`,
    896: `500`,
    897: `500`,
    898: `501`,
    899: `502`,
    9: `2`,
    90: `21`,
    900: `504`,
    901: `504`,
    902: `505`,
    903: `505`,
    904: `505`,
    905: `506`,
    906: `506`,
    907: `507`,
    908: `507`,
    909: `508`,
    91: `21`,
    910: `509`,
    911: `510`,
    912: `510`,
    913: `511`,
    914: `511`,
    915: `511`,
    916: `514`,
    917: `515`,
    918: `516`,
    919: `517`,
    92: `21`,
    920: `517`,
    921: `518`,
    922: `518`,
    923: `519`,
    924: `519`,
    925: `520`,
    926: `520`,
    927: `521`,
    928: `521`,
    929: `522`,
    93: `21`,
    930: `522`,
    931: `522`,
    932: `524`,
    933: `525`,
    934: `525`,
    935: `526`,
    936: `527`,
    937: `528`,
    938: `528`,
    939: `528`,
    94: `21`,
    940: `529`,
    941: `529`,
    942: `530`,
    943: `531`,
    944: `531`,
    945: `532`,
    946: `532`,
    947: `532`,
    948: `532`,
    949: `532`,
    95: `21`,
    950: `532`,
    951: `533`,
    952: `533`,
    953: `534`,
    954: `535`,
    955: `536`,
    956: `538`,
    957: `538`,
    958: `539`,
    959: `539`,
    96: `21`,
    960: `539`,
    961: `540`,
    962: `540`,
    963: `541`,
    964: `541`,
    965: `542`,
    966: `543`,
    967: `544`,
    968: `544`,
    969: `546`,
    97: `21`,
    970: `546`,
    971: `547`,
    972: `547`,
    973: `547`,
    974: `549`,
    975: `549`,
    976: `550`,
    977: `550`,
    978: `551`,
    979: `552`,
    98: `21`,
    980: `554`,
    981: `554`,
    982: `554`,
    983: `556`,
    984: `557`,
    985: `557`,
    986: `558`,
    987: `558`,
    988: `559`,
    989: `559`,
    99: `21`,
    990: `559`,
    991: `560`,
    992: `560`,
    993: `560`,
    994: `562`,
    995: `562`,
    996: `563`,
    997: `563`,
    998: `564`,
    999: `565`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 134,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T5","name":"v2462","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T0","name":"_Ride_adminInterfereEnd0_373","type":"tuple"},{"internalType":"bool","name":"_Ride_end0_373","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1069","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1145","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v929","type":"event"},{"anonymous":false,"inputs":[],"name":"adminInterfereOnStartRide","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"rideEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"rideStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"timeOut","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"bool","name":"v2451","type":"bool"},{"internalType":"bool","name":"v2452","type":"bool"}],"name":"Ride_adminInterfereEnd","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Ride_end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Ride_start","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v2465","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v2468","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v2471","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T0","name":"_Ride_adminInterfereEnd0_373","type":"tuple"},{"internalType":"bool","name":"_Ride_end0_373","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v2474","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v2477","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T4","name":"v2480","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v2483","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620059f99081380391601f1980601f85011683019360018060401b039284861084871117620003195781606092869260409889528339810103126200032f578351926200004e8462000334565b80518452602093858583015192868301938452015194868201958652436003558651916080830192808410878511176200031957606093895260009381858093528285820152828b820152015260049060ff82541662000302577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a1518015908115620002f5575b5015620002de5734620002c7578751966200010b8862000334565b8288019484865289890198858a5233905251855251875260019687845543885588519433848701525189860152516060850152606084526080840184811087821117620002b45788528351958611620002a157600254908782811c9216801562000296575b83831014620002835750601f811162000237575b508093601f8611600114620001cf57505091839491849394620001c3575b50501b916000199060031b1c1916176002555b516156a89081620003518239f35b015192503880620001a2565b600283528183209493928692918316915b888383106200021c575050501062000202575b505050811b01600255620001b5565b015160001960f88460031b161c19169055388080620001f3565b858701518855909601959485019487935090810190620001e0565b60028352818320601f870160051c81019183881062000278575b601f0160051c019087905b8281106200026c57505062000184565b8481550187906200025c565b909150819062000251565b634e487b7160e01b845260229052602483fd5b91607f169162000170565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000f0565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620003195760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c806310bf126e14611ec65780631377727414611b675780631ac18d2214611b1b5780631e93b0f114611afd5780632f1323021461156c5780633fe31c001461153257806341712c0a146113d65780637bf0667f14610fe35780638323075714610fc5578063980d20ef14610f0c578063ab53f2c614610e98578063b3722a99146101685763b3a45e620361000e57604036600319011261016357600435801515809103610163576100cd611f29565b6100d5612104565b610157816040516100e581611fe0565b6020958695868301918352151581526040519061010182611fe0565b60405161010d81611fe0565b60008152600088820152825286820192610125612139565b84525115158251525115158682510152600082515251858251015261014861216b565b90600082525185820152612325565b01511515604051908152f35b600080fd5b60203660031901126101635761017c612104565b50610186366155d1565b600960005403610e7f576101aa61019b61204f565b60208082518301019101613b20565b9060ff60045416610e66577fd64d3134781556c6a626b018733c1e4f7a8f056da03bbd004578b0e46c1b667e604051806101e5843383615601565b0390a1518015908115610e5a575b5015610e41576103e84310610e285734610e0f5760c0810151336001600160a01b0390911603610df65760008051602061563c833981519152602060405160018152a161023e613bbf565b9060018060a01b03815116825260018060a01b03602082015116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c085015261010060e08201511515918260e0870152015115158061010086015260016101208601524361014086015280600014610def578115610def5760005b15610de85760005b1561056857505050506101206040516102f681611ffb565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405192602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511660e084015260e0810151151561010084015261010081015115158284015201511515610140820152610140815261043b81612033565b80516001600160401b03811161055257610456600254611f38565b601f811161050a575b50602091601f82116001146104a55791819260009261049a575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b015190508280610479565b601f19821692600260005260206000209160005b8581106104f2575083600195106104d9575b505050811b0160025561048f565b015160001960f88460031b161c191690558280806104cb565b919260206001819286850151815501940192016104b9565b60026000526105429060008051602061561c833981519152601f840160051c81019160208510610548575b601f0160051c01906139d1565b8261045f565b9091508190610535565b634e487b7160e01b600052604160045260246000fd5b15610de0575b15610d8b57505060008051602061567c833981519152606060018060a01b0360208401511660018060a01b0360c08501511660408501519060405192835260208301526040820152a16101406105c26122ac565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152600060e0840152600061010084015260006101208401526000828401526000610160840152600061018084015201516101a08201526040519061065d82611fa8565b6106656139b2565b825261066f6139b2565b602083015261067c6139b2565b60408301526106896139b2565b60608301526106966139b2565b60808301526106a36139b2565b60a08301526106b06139b2565b60c08301526106bd6139b2565b60e08301526106ca6139b2565b61010083015261012081015115801590610d845761010082015115610d845760005b15610d7d5760e082015115610d765760005b15610d6f5761014082015115610d685760005b156109b55750905061018060405161072881611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405192602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511660e084015260e08101511515610100840152610100810151151561012084015261012081015115156101408401526101408101511515610160840152610160810151151582840152015115156101a08201526101a081526108c981612017565b80516001600160401b038111610552576108e4600254611f38565b601f8111610978575b50602091601f821160011461092d57918192600092610922575b50508160011b916000199060031b1c1916176002555b61048f565b015190508280610907565b601f19821692600260005260206000209160005b858110610960575083600195106104d957505050811b0160025561048f565b91926020600181928685015181550194019201610941565b60026000526109af9060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b826108ed565b61014082015115610b0e57506000602083015152606081015160208084015101526080810151604060208401510152602082015182525b60008051602061565c83398151915260608351604081015190602081015190519060405192835260208301526040820152a1610a63610a42610a3984516020604082015191015190613a60565b84515190613a60565b610a5d6040840151610a576060860151613aa1565b90613a60565b14613992565b600080808060018060a01b0360c08601511660208751015190828215610b05575bf115610ae757600080808060018060a01b0360208601511660408751015190828215610afc575bf115610ae75751905151600091829182918291906001600160a01b0316828215610af3575bf115610ae75760008055600060015561091d6139e8565b6040513d6000823e3d90fd5b506108fc610ad0565b506108fc610aab565b506108fc610a84565b8015610d615761010082015115155b15610b61575060a08101805160408401515260808201519051610b3f91613a74565b60206040840151015260608101516040808401510152604082015182526109ec565b15610bb157610b7960a0820151606083015190613a60565b606083015152610b92604082015160a083015190613a74565b60608381018051602001929092528201518151604001525182526109ec565b61010081015115610cb75761018081015115610cb05761016081015115155b15610c2157610be860a0820151606083015190613a60565b608083015152610c01608082015160a083015190613a74565b6020608084015101526000604060808401510152608082015182526109ec565b606081015160a0830151526000602060a084015101526080810151604060a08401510152600060c0830151526060810151602060c084015101526080810151604060c084015101526101808101511515600014610c975760005b15610c8d5760a08201515b82526109ec565b60c0820151610c86565b61016081015115610ca9576000610c7b565b6001610c7b565b6000610bd0565b61018081015115610d5a5761016081015115155b15610d1e57610ce560a0820151610a576060840151613aa1565b60e083015152610cfe604082015160a083015190613a74565b602060e084015101526000604060e0840151015260e082015182526109ec565b610d2b6060820151613aa1565b6101008301515260006020610100840151015260408101516040610100840151015261010082015182526109ec565b6000610ccb565b6000610b1d565b6001610711565b6000610711565b60016106fe565b60006106fe565b60016106ec565b60008080938193828215610dd7575bf115610ae757600080808093606060018060a01b0360c08301511691015190828215610af357f115610ae75760008055600060015561091d6139e8565b506108fc610d9a565b50600061056e565b60006102de565b60016102d6565b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b905060015414826101f3565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b3461016357600036600319011261016357600054610eb461204f565b6040519182528160206040818301528251908160408401526000935b828510610ef3575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610ed0565b60a036600319011261016357610f20612104565b60405190610f2d82611fe0565b600435825260803660231901126101635760405191606083016001600160401b03811184821017610552576040526024356002811015610163578352604036604319011261016357604051610f8181611fe0565b6044358015158103610163578152606435801515810361016357602082015260208401526084359283151584036101635761048f9360408201526020820152612325565b34610163576000366003190112610163576020600154604051908152f35b604036600319011261016357610ff7612104565b506110013661550a565b600280600054036113bd5761102661101761204f565b60208082518301019101615569565b9160ff600454166113a4577f825a9ccfdfb1287f6bbf7f557926d7e91c3f46a7a55dbaa5b7e395530c27990f60405180611061843383615542565b0390a1518015908115611398575b501561137f5760c08201514310156113665760608201918251340361134d5760a090611099613bbf565b93600180841b038251168552600180841b0360208301511660208601526040820151604086015251606085015260808101516080850152015160a08301523360c0830152600060e0830152600061010083015260006101208301524361014083015261012060405161110a81611ffb565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e0810151151561010085015261010081015115158285015201511515610140830152610140825261124f82612033565b81516001600160401b038111610552576112698254611f38565b601f811161131b575b50602092601f82116001146112b757928192936000926112ac575b50508160011b916000199060031b1c1916179055602060405160008152f35b01519050838061128d565b601f198216938360005260206000209160005b86811061130357508360019596106112ea575b505050811b01905561048f565b015160001960f88460031b161c191690558380806112dd565b919260206001819286850151815501940192016112ca565b61134790836000526020600020601f840160051c8101916020851061054857601f0160051c01906139d1565b83611272565b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b9050600154148361106f565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b6020366003190112610163576113ea612104565b506113f4366155d1565b6002600054036115195761140961101761204f565b9060ff60045416611500577fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e851560405180611444843383615601565b0390a15180159081156114f4575b50156114db5760c081015143106114c257346114a957600080808093608060018060a01b03602083015116910151908282156114a0575bf115610ae75760008055600060015561048f6139e8565b506108fc611489565b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b90506001541482611452565b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b60403660031901126101635761048f611549612104565b60405161155581611fe0565b6004358152611562611f29565b6020820152613c23565b602036600319011261016357611580612104565b5061158a366155d1565b600760005403611ae4576115ae61159f61204f565b602080825183010191016121ad565b9060ff60045416611acb577fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d401604051806115e9843383615601565b0390a1518015908115611abf575b5015611aa6576127104310611a8d5734611a765760c08101903360018060a01b0383511603611a5d576101809060008051602061563c833981519152602060405160008152a16116456122ac565b81516001600160a01b03908116825260208084015182169083015260408084015181840152606080850151908401526080808501519084015260a0848101519084015294511660c082015260e08083015115159082015261010080830151151590820152610120808301511515908201526001610140820152610160808301511515908201529101511515610180820152436101a08201529051906116e982611fa8565b6116f16139b2565b82526116fb6139b2565b60208301526117086139b2565b60408301526117156139b2565b60608301526117226139b2565b608083015261172f6139b2565b60a083015261173c6139b2565b60c08301526117496139b2565b60e08301526117566139b2565b61010083015261012081015115801590611a565761010082015115611a565760005b15611a4f5760e082015115611a485760005b15611a415761014082015115611a3a5760005b156109b5575090506101806040516117b481611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405192602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511660e084015260e08101511515610100840152610100810151151561012084015261012081015115156101408401526101408101511515610160840152610160810151151582840152015115156101a08201526101a0815261195581612017565b80516001600160401b03811161055257611970600254611f38565b601f81116119fd575b50602091601f82116001146119b25791819260009261049a5750508160011b916000199060031b1c191617600255602060405160008152f35b601f19821692600260005260206000209160005b8581106119e5575083600195106104d957505050811b0160025561048f565b919260206001819286850151815501940192016119c6565b6002600052611a349060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b82611979565b600161179d565b600061179d565b600161178a565b600061178a565b6001611778565b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b905060015414826115f7565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b34610163576000366003190112610163576020600354604051908152f35b60003660031901126101635760206040611b33612104565b61015781611b3f61216b565b8581019060018251525115158582510152611b5861216b565b90600082525186820152612325565b604036600319011261016357611b7b612104565b50611b853661550a565b604051611b9181611fe0565b6000815260209182820190600082526001918260005403611ead57611bb461204f565b936060858051810103126101635760405191611bcf83611f72565b611bda87870161218c565b835260606040870151968885019788520151936040840194855260ff60045416611e94577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a76392460405180611c2e843383615542565b0390a180518015908115611e89575b5015611e70576064611c5989611c649301968751905190613ae3565b048084528551613a60565b8082523403611e575760405193611c7a85611f8d565b60008552878501968794600086526064611cde60408901936000855260608a01956000875260808b01976000895260a08c019960008b5260c08d019b60008d528d60018060a01b038099511690523390528251885251885251885251905190613ae3565b0485526103e84301804311611e415743811061016357865260029889600055438955816040519851168b890152511660408701525160608601525160808501525160a08401525160c08301525160e082015260e0815261010081019060018060401b03918181108382111761055257604052805191821161055257611d638454611f38565b601f8111611e11575b508490601f8311600114611dae57928293918392600094611da3575b50501b916000199060031b1c19161790555b60405160008152f35b015192508680611d88565b90601f198316918560005283876000209360005b8988838310611dfa5750505010611de1575b505050811b019055611d9a565b015160001960f88460031b161c19169055848080611dd4565b868601518855909601959485019487935001611dc2565b611e3b908560005286600020601f850160051c81019188861061054857601f0160051c01906139d1565b85611d6c565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b905086541489611c3d565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b600036600319011261016357611eda612104565b6040519060208201906001600160401b0382118383101761055257610157816020946060946040526000815260405190611f1382611fe0565b8682019060008252600083525115159052613c23565b60243590811515820361016357565b90600182811c92168015611f68575b6020831014611f5257565b634e487b7160e01b600052602260045260246000fd5b91607f1691611f47565b606081019081106001600160401b0382111761055257604052565b60e081019081106001600160401b0382111761055257604052565b61012081019081106001600160401b0382111761055257604052565b6101a081019081106001600160401b0382111761055257604052565b604081019081106001600160401b0382111761055257604052565b61014081019081106001600160401b0382111761055257604052565b6101c081019081106001600160401b0382111761055257604052565b61016081019081106001600160401b0382111761055257604052565b60405190600060025461206181611f38565b8085526001918083169081156120e5575060011461209f575b5050829003601f01601f191682016001600160401b0381118382101761055257604052565b6002600090815260209350918360008051602061561c8339815191525b8385106120d15750505050830101388061207a565b8054888601830152930192849082016120bc565b919250506020925060ff191682850152151560051b830101388061207a565b60405190608082016001600160401b038111838210176105525760405260006060838281528260208201528260408201520152565b6040519061214682611f72565b6000604083828152815161215981611fe0565b83815283602082015260208201520152565b6040519061217882611fe0565b81600081526020612187612139565b910152565b51906001600160a01b038216820361016357565b5190811515820361016357565b90816101a091031261016357604051906121c682611fc4565b6121cf8161218c565b82526121dd6020820161218c565b602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015261221660c0820161218c565b60c083015261222760e082016121a0565b60e083015261010061223a8183016121a0565b9083015261012061224c8183016121a0565b9083015261014061225e8183016121a0565b908301526101606122708183016121a0565b908301526122826101808092016121a0565b9082015290565b5160028110156122965790565b634e487b7160e01b600052602160045260246000fd5b604051906101c082016001600160401b0381118382101761055257604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152565b919060405161233381611fe0565b60405161233f81611fe0565b600081526000602082015281526020810191600083526007600054036139795761236a61159f61204f565b9460ff60045416613960576040519333855281516020860152602082019182518051906002978883101561229657604060c0927f4fc9faed95d17dd49e2bb362b93304e5a7edb10d405a0964c435d048db1f11d094828401526020808201518051151560608601520151151560808401520151151560a0820152a1518015908115613954575b501561393b576127104310156139225761240a8251612289565b8581101561229657612c5b57505160200151825284516001600160a01b03163303612c425734612c295760206000917f05df2a954a96eceacb63ac0e63c48f542599e6c8b8cde9c7659cf92a484c527582604051858152a1015261014061246f6122ac565b9460018060a01b03815116865260018060a01b03602082015116602087015260408101516040870152606081015160608701526080810151608087015260a081015160a087015260018060a01b0360c08201511660c0870152600160e08701526101008101511515610100870152610120810151151561012087015201511515610140850152602081510151151561016085015251511515610180840152436101a084015260405161252081611fa8565b6125286139b2565b81526125326139b2565b602082015261253f6139b2565b604082015261254c6139b2565b60608201526125596139b2565b60808201526125666139b2565b60a08201526125736139b2565b60c08201526125806139b2565b60e082015261258d6139b2565b61010082015261012084015115801590612c225761010085015115612c225760005b15612c1b5760e085015115612c145760005b15612c0d5761014085015115612c065760005b1561287e5750506101806040516125ea81611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038651169586835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405194602086015260018060a01b0360208201511660408601526040810151606086015260608101516080860152608081015160a086015260a081015160c086015260018060a01b0360c08201511660e086015260e08101511515610100860152610100810151151561012086015261012081015115156101408601526101408101511515610160860152610160810151151582860152015115156101a08401526101a0835261278b83612017565b82516001600160401b038111610552576127a58254611f38565b601f811161284c575b506020601f82116001146127e957819293946000926127de575b50508160011b916000199060031b1c1916179055565b0151905038806127c8565b601f198216908360005260206000209160005b8181106128345750958360019596971061281b575b505050811b019055565b015160001960f88460031b161c19169055388080612811565b9192602060018192868b0151815501940192016127fc565b61287890836000526020600020601f840160051c8101916020851061054857601f0160051c01906139d1565b386127ae565b909293915061014082015115156000146129ac57506000602083015152606081015160208084015101526080810151604060208401510152602082015182525b60008051602061565c83398151915260608351604081015190602081015190519060405192835260208301526040820152a161290b610a42610a3984516020604082015191015190613a60565b600080808060018060a01b0360c086015116602087510151908282156129a3575bf115610ae757600080808060018060a01b036020860151166040875101519082821561299a575bf115610ae75751905151600091829182918291906001600160a01b0316828215612991575bf115610ae75760008055600060015561298f6139e8565b565b506108fc612978565b506108fc612953565b506108fc61292c565b8015612bff5761010082015115155b156129ff575060a081018051604084015152608082015190516129dd91613a74565b60206040840151015260608101516040808401510152604082015182526128be565b15612a4f57612a1760a0820151606083015190613a60565b606083015152612a30604082015160a083015190613a74565b60608381018051602001929092528201518151604001525182526128be565b61010081015115612b555761018081015115612b4e5761016081015115155b15612abf57612a8660a0820151606083015190613a60565b608083015152612a9f608082015160a083015190613a74565b6020608084015101526000604060808401510152608082015182526128be565b606081015160a0830151526000602060a084015101526080810151604060a08401510152600060c0830151526060810151602060c084015101526080810151604060c084015101526101808101511515600014612b355760005b15612b2b5760a08201515b82526128be565b60c0820151612b24565b61016081015115612b47576000612b19565b6001612b19565b6000612a6e565b61018081015115612bf85761016081015115155b15612bbc57612b8360a0820151610a576060840151613aa1565b60e083015152612b9c604082015160a083015190613a74565b602060e084015101526000604060e0840151015260e082015182526128be565b612bc96060820151613aa1565b6101008301515260006020610100840151015260408101516040610100840151015261010082015182526128be565b6000612b69565b60006129bb565b60016125d4565b60006125d4565b60016125c1565b60006125c1565b60016125af565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b9250612c679051612289565b8381101561229657600114612c7e575b5050509050565b60208501516001600160a01b031633148083521561390d5760015b156138f457346138db5760406000917fcc00c8db8d1739ce8ac5a5e1f44857df5101bcd70c69d2e0ca9da2cc8a94980260208351858152a1015251156134af57610180612ce46122ac565b9360018060a01b03815116855260018060a01b03602082015116602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260018060a01b0360c08201511660c086015260e0810151151560e0860152610100810151151561010086015260016101208601526101408101511515610140860152610160810151151561016086015201511515610180840152436101a0840152604051612d9881611fa8565b612da06139b2565b8152612daa6139b2565b6020820152612db76139b2565b6040820152612dc46139b2565b6060820152612dd16139b2565b6080820152612dde6139b2565b60a0820152612deb6139b2565b60c0820152612df86139b2565b60e0820152612e056139b2565b610100820152610120840151158015906134a857610100850151156134a85760005b156134a15760e08501511561349a5760005b15613493576101408501511561348c5760005b15613101575050610180604051612e6281611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038651169586835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405194602086015260018060a01b0360208201511660408601526040810151606086015260608101516080860152608081015160a086015260a081015160c086015260018060a01b0360c08201511660e086015260e08101511515610100860152610100810151151561012086015261012081015115156101408601526101408101511515610160860152610160810151151582860152015115156101a08401526101a0835261300383612017565b82516001600160401b0381116105525761301d8254611f38565b601f81116130cf575b506020601f8211600114613069578192939460009261305e575b50508160011b916000199060031b1c19161790555b80388080612c77565b015190503880613040565b601f198216908360005260206000209160005b8181106130b75750958360019596971061309e575b505050811b019055613055565b015160001960f88460031b161c19169055388080613091565b9192602060018192868b01518155019401920161307c565b6130fb90836000526020600020601f840160051c8101916020851061054857601f0160051c01906139d1565b38613026565b9092939150610140820151151560001461323257506000602083015152606081015160208084015101526080810151604060208401510152602082015182525b60008051602061565c83398151915260608351604081015190602081015190519060405192835260208301526040820152a161318e610a42610a3984516020604082015191015190613a60565b600080808060018060a01b0360c08601511660208751015190828215613229575bf115610ae757600080808060018060a01b0360208601511660408751015190828215613220575bf115610ae75751905151600091829182918291906001600160a01b0316828215613217575bf115610ae7576000805560006001556132126139e8565b613055565b506108fc6131fb565b506108fc6131d6565b506108fc6131af565b80156134855761010082015115155b15613285575060a0810180516040840151526080820151905161326391613a74565b6020604084015101526060810151604080840151015260408201518252613141565b156132d55761329d60a0820151606083015190613a60565b6060830151526132b6604082015160a083015190613a74565b6060838101805160200192909252820151815160400152518252613141565b610100810151156133db57610180810151156133d45761016081015115155b156133455761330c60a0820151606083015190613a60565b608083015152613325608082015160a083015190613a74565b602060808401510152600060406080840151015260808201518252613141565b606081015160a0830151526000602060a084015101526080810151604060a08401510152600060c0830151526060810151602060c084015101526080810151604060c0840151015261018081015115156000146133bb5760005b156133b15760a08201515b8252613141565b60c08201516133aa565b610160810151156133cd57600061339f565b600161339f565b60006132f4565b6101808101511561347e5761016081015115155b156134425761340960a0820151610a576060840151613aa1565b60e083015152613422604082015160a083015190613a74565b602060e084015101526000604060e0840151015260e08201518252613141565b61344f6060820151613aa1565b610100830151526000602061010084015101526040810151604061010084015101526101008201518252613141565b60006133ef565b6000613241565b6001612e4c565b6000612e4c565b6001612e39565b6000612e39565b6001612e27565b6101806134ba6122ac565b9360018060a01b03815116855260018060a01b03602082015116602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260018060a01b0360c08201511660c086015260e0810151151560e0860152600161010086015261012081015115156101208601526101408101511515610140860152610160810151151561016086015201511515610180840152436101a084015260405161356e81611fa8565b6135766139b2565b81526135806139b2565b602082015261358d6139b2565b604082015261359a6139b2565b60608201526135a76139b2565b60808201526135b46139b2565b60a08201526135c16139b2565b60c08201526135ce6139b2565b60e08201526135db6139b2565b610100820152610120840151158015906138d457610100850151156138d45760005b156138cd5760e0850151156138c65760005b156138bf57610140850151156138b85760005b1561310157505061018060405161363881611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038651169586835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405194602086015260018060a01b0360208201511660408601526040810151606086015260608101516080860152608081015160a086015260a081015160c086015260018060a01b0360c08201511660e086015260e08101511515610100860152610100810151151561012086015261012081015115156101408601526101408101511515610160860152610160810151151582860152015115156101a08401526101a083526137d983612017565b82516001600160401b038111610552576137f38254611f38565b601f8111613886575b506020601f821160011461383a578192939460009261382f575b50508160011b916000199060031b1c1916179055613055565b015190503880613816565b601f198216908360005260206000209160005b81811061386e5750958360019596971061309e57505050811b019055613055565b9192602060018192868b01518155019401920161384d565b6138b290836000526020600020601f840160051c8101916020851061054857601f0160051c01906139d1565b386137fc565b6001613622565b6000613622565b600161360f565b600061360f565b60016135fd565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b60c08501516001600160a01b03163314612c99565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b905060015414386123f0565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b1561399957565b60405163100960cb60e01b815260326004820152602490fd5b604051906139bf82611f72565b60006040838281528260208201520152565b8181106139dc575050565b600081556001016139d1565b6139f3600254611f38565b806139fb5750565b601f8111600114613a0e57506000600255565b6002600052613a5390601f0160051c60008051602061561c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6139d1565b6000602081208160025555565b9190820191828111611e4157821061016357565b908103908111611e415790565b8115613a8b570490565b634e487b7160e01b600052601260045260246000fd5b906000918015908115613ab7575b501561016357565b600181901b935090506001600160ff1b0381168103611e4157613adc60029184613a81565b1438613aaf565b600092918015918215613afa575b50501561016357565b80820294509150811582850482141715611e4157613b189084613a81565b143880613af1565b90816101409103126101635760405190613b3982611ffb565b613b428161218c565b8252613b506020820161218c565b602083015260408101516040830152606081015160608301526080810151608083015260a081015160a0830152613b8960c0820161218c565b60c0830152613b9a60e082016121a0565b60e0830152610100613bad8183016121a0565b908301526122826101208092016121a0565b6040519061016082016001600160401b0381118382101761055257604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201520152565b604051613c2f81611fe0565b600081526020810190600082526009600054036154f157613c5161019b61204f565b9260ff600454166154d8577f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776606060405133815283516020820152602084015115156040820152a15180159081156154cc575b50156154b3576103e843101561549a57602083018051336001600160a01b03918216811480855260c0870151909216148085529195919015615495575060015b156154835760015b1561546a57346154515760606000917f4b386d0cee169ef45d418a455cb51e6409d1d2f6f29e0d628fb7440f4ae8bbe36020604051858152a10152511561457a5750613d36613bbf565b9160018060a01b03825116835260018060a01b03905116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c085015261012060e08201511515918260e08701526001610100870152015115158061012086015243610140860152816000146145735760005b1561456b57156145645760005b156140305750505090610120604051613dea81611ffb565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151582850152015115156101408301526101408252613f2f82612033565b81516001600160401b03811161055257613f4a600254611f38565b601f8111613ff3575b50602092601f8211600114613f905792819293600092613f85575b50508160011b916000199060031b1c191617600255565b015190503880613f6e565b601f19821693600260005260206000209160005b868110613fdb5750836001959610613fc2575b505050811b01600255565b015160001960f88460031b161c19169055388080613fb7565b91926020600181928685015181550194019201613fa4565b600260005261402a9060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b38613f53565b1561450f5750509060008051602061567c833981519152606060018060a01b0360208501511660018060a01b0360c08601511660408601519060405192835260208301526040820152a16101406140856122ac565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c0850152600060e0850152600061010085015260006101208501526000828501526000610160850152600061018085015201516101a083015260405161411f81611fa8565b6141276139b2565b81526141316139b2565b602082015261413e6139b2565b604082015261414b6139b2565b60608201526141586139b2565b60808201526141656139b2565b60a08201526141726139b2565b60c082015261417f6139b2565b60e082015261418c6139b2565b6101008201526101208301511580159061450857610100840151156145085760005b156145015760e0840151156144fa5760005b156144f357610140840151156144ec5760005b156144655750506101806040516141e981611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151561012085015261012081015115156101408501526101408101511515610160850152610160810151151582850152015115156101a08301526101a0825261438a82612017565b81516001600160401b038111610552576143a5600254611f38565b601f8111614428575b50602092601f82116001146143df5792819293600092613f855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106144105750836001959610613fc257505050811b01600255565b919260206001819286850151815501940192016143f3565b600260005261445f9060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b386143ae565b61014084015192939192156129ac575060006020830151526060810151602080840151015260808101516040602084015101526020820151825260008051602061565c83398151915260608351604081015190602081015190519060405192835260208301526040820152a161290b610a42610a3984516020604082015191015190613a60565b60016141d3565b60006141d3565b60016141c0565b60006141c0565b60016141ae565b6000808093819382821561455b575bf115610ae757600080808093606060018060a01b0360c0830151169101519082821561299157f115610ae75760008055600060015561298f6139e8565b506108fc61451e565b6001613dd2565b506000613dd2565b6001613dc5565b5115614cda57614588613bbf565b9160018060a01b03825116835260018060a01b03905116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c0850152600160e08501526101206101008201511515918261010087015201511515806101208601524361014086015281600014614cd35760005b15614ccb5715614cc45760005b1561485d575050509061012060405161463d81611ffb565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e0810151151561010085015261010081015115158285015201511515610140830152610140825261478282612033565b81516001600160401b0381116105525761479d600254611f38565b601f8111614820575b50602092601f82116001146147d75792819293600092613f855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106148085750836001959610613fc257505050811b01600255565b919260206001819286850151815501940192016147eb565b60026000526148579060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b386147a6565b15614cbd5760015b1561450f5750509060008051602061567c833981519152606060018060a01b0360208501511660018060a01b0360c08601511660408601519060405192835260208301526040820152a16101406148ba6122ac565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c0850152600060e0850152600061010085015260006101208501526000828501526000610160850152600061018085015201516101a083015260405161495481611fa8565b61495c6139b2565b81526149666139b2565b60208201526149736139b2565b60408201526149806139b2565b606082015261498d6139b2565b608082015261499a6139b2565b60a08201526149a76139b2565b60c08201526149b46139b2565b60e08201526149c16139b2565b61010082015261012083015115801590614cb65761010084015115614cb65760005b15614caf5760e084015115614ca85760005b15614ca15761014084015115614c9a5760005b15614465575050610180604051614a1e81611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151561012085015261012081015115156101408501526101408101511515610160850152610160810151151582850152015115156101a08301526101a08252614bbf82612017565b81516001600160401b03811161055257614bda600254611f38565b601f8111614c5d575b50602092601f8211600114614c145792819293600092613f855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614c455750836001959610613fc257505050811b01600255565b91926020600181928685015181550194019201614c28565b6002600052614c949060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b38614be3565b6001614a08565b6000614a08565b60016149f5565b60006149f5565b60016149e3565b6000614865565b6001614625565b506000614625565b6001614618565b7f499c3844f34dda308fb2a779b3559e6f79bfc1b8af2df6bb437b447ec49f823a600080a1614d07613bbf565b9160018060a01b03825116835260018060a01b03905116806020840152604082015160408401526060820151606084015260808201519182608085015260a081015160a085015260018060a01b0360c08201511660c085015261010060e08201511515918260e087015201511515806101008601526001610120860152436101408601528060001461544a57811561544a5760005b156154435760005b15614fdd575050505090610120604051614dbd81611ffb565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260008282015261010060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c084015260e0810151151560e08401520151151561010082015260096000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151582850152015115156101408301526101408252614f0282612033565b81516001600160401b03811161055257614f1d600254611f38565b601f8111614fa0575b50602092601f8211600114614f575792819293600092613f855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614f885750836001959610613fc257505050811b01600255565b91926020600181928685015181550194019201614f6b565b6002600052614fd79060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b38614f26565b1561543b575b1561450f5750509060008051602061567c833981519152606060018060a01b0360208501511660018060a01b0360c08601511660408601519060405192835260208301526040820152a16101406150386122ac565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260018060a01b0360c08201511660c0850152600060e0850152600061010085015260006101208501526000828501526000610160850152600061018085015201516101a08301526040516150d281611fa8565b6150da6139b2565b81526150e46139b2565b60208201526150f16139b2565b60408201526150fe6139b2565b606082015261510b6139b2565b60808201526151186139b2565b60a08201526151256139b2565b60c08201526151326139b2565b60e082015261513f6139b2565b6101008201526101208301511580159061543457610100840151156154345760005b1561542d5760e0840151156154265760005b1561541f57610140840151156154185760005b1561446557505061018060405161519c81611fc4565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015260006101608201526000828201528160018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260018060a01b0360c08201511660c0840152610100810151151561010084015261012081015115156101208401526101608101511515610160840152015115158282015260076000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015160c085015260018060a01b0360c08201511660e085015260e08101511515610100850152610100810151151561012085015261012081015115156101408501526101408101511515610160850152610160810151151582850152015115156101a08301526101a0825261533d82612017565b81516001600160401b03811161055257615358600254611f38565b601f81116153db575b50602092601f82116001146153925792819293600092613f855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106153c35750836001959610613fc257505050811b01600255565b919260206001819286850151815501940192016153a6565b60026000526154129060008051602061561c833981519152601f840160051c8101916020851061054857601f0160051c01906139d1565b38615361565b6001615186565b6000615186565b6001615173565b6000615173565b6001615161565b506000614fe3565b6000614da4565b6001614d9c565b60405163100960cb60e01b8152602b6004820152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b83516001600160a01b03163314613cec565b613ce4565b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b90506001541438613ca4565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60409060031901126101635760408051919082016001600160401b038111838210176105525760405260043582526024356020830152565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b908160e09103126101635760c06040519161558383611f8d565b61558c8161218c565b835261559a6020820161218c565b602084015260408101516040840152606081015160608401526080810151608084015260a081015160a0840152015160c082015290565b60209060031901126101635760405190602082016001600160401b03811183821017610552576040526004358252565b6001600160a01b039091168152905160208201526040019056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace37c41e8981f875d37b631f1bb562b7fd809cb26297a078ed20b478536855bf70a5977c41894b154df4bb3ef9211dd2081fa6eea819d7f5ff2f8801906956f8c38fedfe3a4161f4d8f272023757b05294799bd4e9bef428bdd3ed433202d2f44da164736f6c6343000811000a`,
  BytecodeLen: 23033,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:156:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:169:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:183:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:325:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:236:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:325:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:188:67:after expr stmt semicolon',
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

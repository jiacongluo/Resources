var Moli=JSON.parse($response.body);if(-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn"))Moli.data?.result?.dataList?.length>0&&(Moli.data.result.dataList=Moli.data.result.dataList.filter(d=>!("big_banner_area_v870"==d.type||"todo_list_v860"==d.type)));else if(-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.homepage.merge.get.cn"))for(let i=0;i<4;i++){let d=`mtop.cainiao.nbpresentation.protocol.homepage.get.cn@${i}`;Moli.data?.[d]?.data?.result?.dataList?.length>0&&(Moli.data[d].data.result.dataList=Moli.data[d].data.result.dataList.filter(d=>!("big_banner_area_v870"==d.type||"todo_list_v860"==d.type)))}else -1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.mshow")?(Moli.data["1308"]&&delete Moli.data["1308"],Moli.data["1275"]&&delete Moli.data["1275"],Moli.data["205"]&&delete Moli.data["205"]):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")?Moli.data?.result&&(Moli.data.result=[{}]):-1!=$request.url.indexOf("mtop.cainiao.adkeyword")&&Moli.data?.result?.adHotKeywords&&(Moli.data.result.adHotKeywords=[]);var body=JSON.stringify(Moli);$done({body});

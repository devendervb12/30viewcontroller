sap.ui.controller("view.MyPage", {
	//code
	onInit : function(){
		//this = controller
		var oIp = this.getView().byId("idIp");
		
		if(oIp.getValue() === 'Devender'){
			var oippin = this.getView().byId("idpin");
			oippin.setValue("500072")
			
		}else{
			
			this.getView().byId("idpin").setValue("500016")
		}
		
		
	} 
});
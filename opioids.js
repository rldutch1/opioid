function formReset()
 {
 document.getElementById("form1").reset();
 }

function setTabIndex()
{
		document.getElementById('1').tabIndex="1";
		document.getElementById('2').tabIndex="2";
		document.getElementById('3').tabIndex="3";
		document.getElementById('4').tabIndex="4";
		document.getElementById('5').tabIndex="5";
		document.getElementById('6').tabIndex="6";
		document.getElementById('7').tabIndex="7";
		document.getElementById('8').tabIndex="8";
		document.getElementById('9').tabIndex="9";
		document.getElementById('10').tabIndex="10";
		document.getElementById('11').tabIndex="11";
		document.getElementById('12').tabIndex="12";
		document.getElementById('13').tabIndex="13";
		document.getElementById('14').tabIndex="14";
		document.getElementById('15').tabIndex="15";
}

var b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, e3, e5, e7, e9, e11;

function MorphEquiv()
{
		b3 = parseFloat(document.form1.morphivim.value);
		b4 = parseFloat(document.form1.morphirpo.value);
		b5 = parseFloat(document.form1.morphsrpo.value);
		b6 = parseFloat(document.form1.oxycopo.value);
		b7 = parseFloat(document.form1.oxycosrpo.value);
		b8 = parseFloat(document.form1.meperivim.value);
		b9 = parseFloat(document.form1.hydrocopo.value);
		b10 = parseFloat(document.form1.fentaniv.value);
		b11 = parseFloat(document.form1.percocet.value);
		b12 = parseFloat(document.form1.fentantran.value);
		b13 = parseFloat(document.form1.hytromorphiv.value);
		b14 = parseFloat(document.form1.hydromorphopo.value);
		b15 = parseFloat(document.form1.methadoniv.value);
		b16 = parseFloat(document.form1.methadonpo.value);
		b17 = parseFloat((0));
		b18 = parseFloat((0));
		b19 = parseFloat((0));

		e9 = b3 +(b4/3)+(b5/3)+(b8/7.5)+(b9/30)+(b15*9)+(b16*9/2)+(b13/0.15)+(b14/0.45)+(b17/0.2)+(b6*2/3)+(b7*2/3)+(b10*0.1)+(b18/20)+(b12*0.48)+(b19/30)+(b11*0.66*5);
		e3 = (e9 * 3);
		e5 = Math.round(e9 * 3 * 0.5);
		e7 = Math.round(e9 * 3 * 0.5);
		e11 = (e9 / 8);

		document.form1.mscequiv.value = e3.toFixed(1)
		document.form1.oxyconequiv.value = e5.toFixed(1)
		document.form1.oxycodequiv.value = e7.toFixed(1)
		document.form1.ivmorpho.value = e9.toFixed(1)
		document.form1.ivhydrmorpho.value = e11.toFixed(1)

var alertmsg ='';
if (isNaN(b3) == true|| b3 < 0)
     {
     alertmsg = alertmsg + "Morphine IV/IM (mg) has an invalid entry!" +"\n";
     alert(alertmsg);
     formReset();
     }
}

function MorphTab()
{
	MorphEquiv();
	setTabIndex();
}

$(document).ready(function(){
  $("#15").click(function(){formReset()
  });
});
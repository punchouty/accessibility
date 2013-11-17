window.onload = init;
function init()
{
	var objCheck=document.getElementById('checkTest');
	objCheck.setAttribute('role','checkbox');
	objCheck.setAttribute('aria-checked','false');
objCheck.onclick = function()
{
	return doCheck(objCheck);
};
}
function doCheck(objCheck)
{
	var currentvalue = objCheck.getAttribute('aria-checked');
	switch(currentvalue)
	{
		case 'false':
		objCheck.setAttribute('src', 'mixed.gif');
		objCheck.setAttribute('aria-checked', 'mixed');
		break;
		case 'mixed':
		objCheck.setAttribute('src', 'checked.gif');
		objCheck.setAttribute('aria-checked', 'true');
		break;
		case 'true':
		objCheck.setAttribute('src', 'unchecked.gif');
		objCheck.setAttribute('aria-checked', 'false');
	}
	return true;
}

function show(state, window_block)
	{
		document.getElementById('window').style.display = state;
		document.getElementById(window_block).style.display = state;
	}
	function closeall()
	{
		document.getElementById('window').style.display = 'none';
		document.getElementById('window_block1').style.display = 'none';
		document.getElementById('window_block2').style.display = 'none';
		document.getElementById('window_block3').style.display = 'none';
	}
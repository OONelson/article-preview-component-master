const shareBar = document.querySelector('.container__share-info');
const share = document.querySelector('.share');

share?.addEventListener('click', () => {
	if (shareBar?.classList.contains('active')) {
		shareBar?.classList.remove('active');
	} else {
		shareBar?.classList.add('active');
	}

	if (share.classList.contains('clicked')) {
		share.classList.remove('clicked');
	} else {
		share.classList.add('clicked');
	}
});

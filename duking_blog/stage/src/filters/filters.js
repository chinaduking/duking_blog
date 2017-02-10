
/*截取正文的前100字节*/
export function content_header(value) {
	var count = 150;
	if (value.length < count) return value;
	value = value.substring(0,count);
	return value;
}
const get = async (req, res) => {
	try {
		let targetPage = req.params.page;
		let subPage = req.params.subPage;
		let id = req.params.id;

		switch (targetPage) {
			case "promotions":
				redirectPage = "/promotions/";
				if (subPage) {
					redirectPage += "detail.html";
				}
				if (id) {
					redirectPage += "?content=" + id;
				}
				break;
			case "trading":
				redirectPage = "/trading/";
				break;
			case "downloadImage":
				redirectPage = "/downloadImage.html";
				break;
			case "test3":
				redirectPage = "/test3.html";
				break;
			case "widget":
				redirectPage = "/widget.html";
				break;
			default:
				redirectPage = "index.html";
		}
		res.redirect(redirectPage);
	} catch (error) {
		console.error("Error redirecting:", error);
		res.redirect("/index.html");
	}
};

const post = async (req, res) => {
	try {
		// Compose server-side rendered HTML with employee data
		const html = `
		<html>
		  <head><title>Employee List</title></head>
		  <body>
			<h1>Employee List</h1>
			<table>
			  <thead>
				<tr>
				  <th>Name</th>
				  <th>Email</th>
				  <th>Join Date</th>
				</tr>
			  </thead>
			  <tbody>
				  <tr>
					<td>AA</td>
					<td>BbB</td>
					<td>CC</td>
				  </tr>
			  </tbody>
			</table>
		  </body>
		</html>
	  `;

		// Send the composed HTML to the client
		res.send(html);
	} catch (error) {
		res.status(500).send("Error fetching employees");
	}
};

module.exports = { get, post };

# Module: MMM-Instagram

Display the last 20 photos from instagram, one photo at a time

## Module Config Example

To use this module, add it to the modules array in the `config/config.js` file:
```javascript
	{
		module: 'MMM-instagram',
		position: 'top_left',
		config: {
			keys: {
			client_id: 'ae44db6e0bd64ac2b84deb7d9906dd00',
			client_secret: '69d50082aa754b159667c763b8fc5f14'
			}
		}
	},
```

## Create Instagram API Keys

1) Log in to instagram at https://www.instagram.com and then in the same browser go to https://www.instagram.com/developer/

2) Click "Manage clients" in the top right corner of the screen. Use http://example.com for the website url and fill out the other fields with dummy information. Submit the form.

3) Click "Manage Clients" from the top right (again) and then "Register a new client". Enter dummy information in all the fields. Since you are the only person who will ever see this application the information is irrelevant. Use http://example.com for the "website url" and http://example.com/callback for the "valid redirect url". Submit the form

4) You should now see a page with a "Client ID" and a "Client Secret". Copy and paste these into the module config for the instagram app. With these two keys your raspberry pi can access your instagram account!

5) Save and open the magic mirror with `npm start`. You should your instagram feed now.

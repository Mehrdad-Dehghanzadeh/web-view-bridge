# web-view-bridge

It is a external library between web view (website) what opens in iframe and its parent, which is the basis of a super applications.

## Usage

In **super applications**, There is always a need for a web view to communicate with its parent in one way and to send or receive data.
This communication mechanism must be created by an external library called a bridge.

## Development Server

Start Development Server <http://localhost:2020>

```bash

npm run dev
```

## Production

Build the application for production:

```bash

npm run build
```

When you build, it gives you the output of a script that should be placed in the desired web view.

```html
<script src="/webViewBridge.js" type="text/javascript"></script>
```

**Tip :** A very important tip is that you can use the following code to **prevent cache** in web views.

```html

<body>
  <script>
  var scriptTag = document.createElement('script');
  var src = '/webViewBridge.js?q=' + Date.now();
  scriptTag.setAttribute('src', src);
  scriptTag.setAttribute('type', 'text/javascript');
  document.body.append(scriptTag);
</script>
</body>
</html>
```

### Send Data To Parent

when you want send data to parent you use method of bridge.
type of messages consists of two prop `name` and `payload`

```html
<script>
  window.bridge[methodName]()
</script>
```

### Recive Data and CallBack

when you want get data from parent you must add listener for desired event that is a custom event

```html
<script>
  addEventListener('eventName', (event) => {})
</script>
```

## Benefits Of Using Super Application

- Multi stack
- Publish As WebSite and easy release
- Ease Maintenance
- Small Size Application
- Ease to Multi Platform
- Ease to add new business as feature in application
- Reduce Packages and Dependencies

## Requirment Of Super Application

- **Multiple Environments Publish** For All Web View and need to **good Devops**
- OAuth Server for Autintaction / Authorization in All Web View
- Use **Deep Link** concept for links in app

## Challenges Of Super Application

- UI/UX in all Web View must the same
- UiKit (atomic commponents)
- Global configs such as global css and utility lib javascript
- CSP
- CORS
- Permissions

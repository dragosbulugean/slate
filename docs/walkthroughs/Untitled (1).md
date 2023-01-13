### Test codedrawer

::::codedrawer{title="asdfadasdasdas"}
:::codeblocktabs-examples
```php
// Some wordpress plugi
 // Add our plugin's option page to the WP admin menu.
  public function add_plugin_options_page() {
    add_options_page(
      'Example Plugin Settings',
      'Example Plugin Settings',
      'manage_options',
      'ex',
      [$this, 'render_admin_page']
    );
  }
```
```go
// Next should be used only inside middleware.
// It executes the pending handlers in the chain inside the calling handler.
// See example in GitHub.
func (c *Context) Next() {
	c.index++
	for c.index < int8(len(c.handlers)) {
		c.handlers[c.index](c)
		c.index++
	}
}
```
```javascript
// demo js
```
:::
:::codeblocktabs-responses
```json
// 404 -  not found
{
  requireFingerprintScope: true,
  maxMachines: 1,
  concurrent: false,
  floating: false,
  protected: true,
  strict: true
}
```
:::
::::
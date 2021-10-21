# Bug reproduce

`npm start`

- Add form fiels using '+' button

- Fill the form

- Click 'OK'

The values are filled with additional data:

```
test: [{
altKey: false
bubbles: true
button: 0
buttons: 0
cancelable: true
clientX: 455
clientY: 128
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 3
first: "first"
getModifierState: ƒ modifierStateGetter(keyArg)
isDefaultPrevented: ƒ functionThatReturnsFalse()
isPropagationStopped: ƒ functionThatReturnsFalse()
isTrusted: true
metaKey: false
movementX: 0
movementY: 0
nativeEvent: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
pageX: 455
pageY: 128
relatedTarget: null
screenX: 4295
screenY: 235
second: "second"
shiftKey: false
target: span
third: "third"
timeStamp: 3723.4000000003725
type: "click"
view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
_reactName: "onClick"
_targetInst: null
}]
```

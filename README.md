This is an issue I faced when using electron-react-boilerplate and react-highcharts.

I'm trying to test react-highcarts components by mounting it using enzyme. It fails with this stack trace

```
 InvalidCharacterError
      at exports.name (node_modules\jsdom\lib\jsdom\living\helpers\validate-names.js:10:11)
      at DocumentImpl.createElement (node_modules\jsdom\lib\jsdom\living\nodes\Document-impl.js:685:5)
      at Document.createElement (node_modules\jsdom\lib\jsdom\living\generated\Document.js:92:59)
      at a.createElement (node_modules\highcharts\highcharts.js:17:221)
      at Object.init (node_modules\highcharts\highcharts.js:91:494)
      at Object.createElement (node_modules\highcharts\highcharts.js:62:286)
      at Object.createElement (node_modules\highcharts\highcharts.js:107:323)
      at Object.init (node_modules\highcharts\highcharts.js:100:377)
      at Object.B (node_modules\highcharts\highcharts.js:109:141)
      at Object.getContainer (node_modules\highcharts\highcharts.js:249:378)
      at Object.firstRender (node_modules\highcharts\highcharts.js:263:422)
      at Object.init (node_modules\highcharts\highcharts.js:240:174)
      at Object.getArgs (node_modules\highcharts\highcharts.js:239:189)
      at Object.a.Chart (node_modules\highcharts\highcharts.js:238:501)
      at renderChart (node_modules\react-highcharts\dist\ReactHighcharts.js:1:1283)
      at componentDidMount (node_modules\react-highcharts\dist\ReactHighcharts.js:1:1804)
      at node_modules\react-dom\lib\ReactCompositeComponent.js:265:25
      at measureLifeCyclePerf (node_modules\react-dom\lib\ReactCompositeComponent.js:75:12)
      at node_modules\react-dom\lib\ReactCompositeComponent.js:264:11
      at CallbackQueue.notifyAll (node_modules\react-dom\lib\CallbackQueue.js:76:22)
      at ReactReconcileTransaction.close (node_modules\react-dom\lib\ReactReconcileTransaction.js:80:26)
      at ReactReconcileTransaction.closeAll (node_modules\react-dom\lib\Transaction.js:206:25)
      at ReactReconcileTransaction.perform (node_modules\react-dom\lib\Transaction.js:153:16)
      at batchedMountComponentIntoNode (node_modules\react-dom\lib\ReactMount.js:126:15)
      at ReactDefaultBatchingStrategyTransaction.perform (node_modules\react-dom\lib\Transaction.js:140:20)
      at Object.batchedUpdates (node_modules\react-dom\lib\ReactDefaultBatchingStrategy.js:62:26)
      at Object.batchedUpdates (node_modules\react-dom\lib\ReactUpdates.js:97:27)
      at Object._renderNewRootComponent (node_modules\react-dom\lib\ReactMount.js:320:18)
      at Object._renderSubtreeIntoContainer (node_modules\react-dom\lib\ReactMount.js:401:32)
      at Object.render (node_modules\react-dom\lib\ReactMount.js:422:23)
      at Object.renderIntoDocument (node_modules\react-dom\lib\ReactTestUtils.js:79:21)
      at renderWithOptions (node_modules\enzyme\build\react-compat.js:187:26)
      at new ReactWrapper (node_modules\enzyme\build\ReactWrapper.js:94:59)
      at mount (node_modules\enzyme\build\mount.js:19:10)
      at Context.<anonymous> (C:/Users/phil/Downloads/projects with problems/react-highcharts-enzyme-issue/src/App.test.js:7:19)
```
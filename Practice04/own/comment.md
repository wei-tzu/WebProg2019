# **Practice04. Comment**
## **完成度**
### 已完成
1. 靜態 html 架構：20/20
2. 監聽 Input 並且 render 待辦事項：20/20

### 未完成
1. Checkbox 監聽 : 0/15
2. Delete todo item : 0/10
3. counter of undo items : 0/5
4. filter : 0/15
5. clear completed items : 0/15

## **Coding Quality**
70 / 100

## **正確性**
70 / 100

## **值得學習的地方**
N/A

## **建議改進的地方**
1. 變數取名字的方式可以再詳細一點，增加可讀性
2. App.js 中的 this.props 不需要再有 this.list, this.adjustList，直接宣告在 this.state 裡面即可。宣告過多和使用者互動的變數，之後會增加維護的難度。
```js
constructor(props) {
    super(props);
    this.state = {
        count: 0, 
        list: [], 
        adjustList: []
    }
}
```
3. Input component 不需要傳入 placeholder, id，因為完全沒有用到
```js
export default ({onKeyPress, placeholder}) => {
    return <input type="text" 
                  placeholder={placeholder}
                  onKeyPress={onKeyPress}
                  class ="todo-app__input"></input>
}
```
4. 當前檔案路徑是 public
```js
<img src={"./x.png"}/> //照片要放在 public/下面
```
## **其他心得**
N/A

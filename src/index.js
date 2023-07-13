// 所有的image
const items = document.querySelectorAll('.image')
// image的总长度
const count = items.length
// 当前显示的轮播图下标
let index = 4;
// 每一张图片相对的偏移量Step
const xOffsetStep = 150;
// 缩放的step
const scaleStep = 0.8;
// 透明度的step
const opacityStep = 0.5;

function layout() {
  console.log('items', items);
  for (let i = 0; i < count; i++) {
    const item = items[i];
    const sign = Math.sign(index - i);

    console.log(item)

    let xOffset = (i - index) * xOffsetStep
    if (i !== index) {
      xOffset = xOffset + xOffsetStep * -sign;
    }
    const scale = scaleStep ** Math.abs(index - i);
    const rotateY = i === index ? 0 : 45 * sign;

    item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`

    item.style.opacity = opacityStep ** Math.abs(index - i)
    item.style.zIndex = count - Math.abs(index - i)
  }
}

layout()

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener('click', () => {
  index--
  if (index < 0)
    index = 0
  layout()
})

next.addEventListener('click', () => {
  index++
  if (index > count - 1)
    index = count - 1
  layout()
})
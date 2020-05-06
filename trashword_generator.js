
function trashWords(profession) {
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const task_index = Math.floor(Math.random() * 4)
  const phrase_index = Math.floor(Math.random() * 4)
  if (profession === 'undefined') {
    alert('請點選角色')
  }

  if (profession == undefined) {
    return '請選取角色'
  } else {
    const trashwords = `身為一個 ${target[profession]} ${task[profession][task_index]} ${phrase[phrase_index]} 吧！`
    return trashwords
  }


}

module.exports = trashWords
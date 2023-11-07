function _createModal(options) {
   const DEFAULT_WIDTH = '952px'
   const modal = document.createElement('div')
   modal.classList.add('vmodal')
   modal.insertAdjacentHTML('afterbegin', `
      <div class="modal__overlay" data-close="true">
         <div class="modal__wrapper" data-close="true" style="width: ${options.width || DEFAULT_WIDTH}">
            ${options.closable ? `<div class="modal__close-btn" data-close="true"><span data-close="true">&#215</span></div>` : ''}
               <div class="modal__window" data-footer>
               <div class="image__wrapper" data-image>${options.image}</div>
               <div class="modal__content pet">
               <h2 class="pet__title" data-name>${options.name || "Pets'name"}</h2>
                  <p class="pet__subtite" data-subtitle>${options.type || "Pets'type"}-${options.breed}</p>
               <p class="pet__info" data-content>${options.description || "Pets'info"}</p>
               <ul class="pet__parameters">
                  <li data-age>Age: ${options.age || "Pets'age"}</li>
                  <li data-inoculations>Inoculations: ${options.inoculations || "Pets'inoculations"}</li>
                  <li data-diseases>Diseases: ${options.diseases || "Pets'diseases"}</li>
                  <li data-parasites>Parasites: ${options.parasites || "Pets'parasites"}</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
`)
   document.body.appendChild(modal)
   return modal
}

$.modal = function (options) {
   const ANIMATION_SPEED = 200
   const $modal = _createModal(options)
   let closing = false
   let destroyed = false

   const modal = {
      open() {
         if (destroyed) {
            return console.log('Modal is destroyed')
         }
         !closing && $modal.classList.add('open')
         document.body.classList.toggle('_lock')
      },
      close() {
         closing = true
         $modal.classList.remove('open')
         $modal.classList.add('hide')
         setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
         }, ANIMATION_SPEED)
      },
   }

   const listener = event => {// функция слушателя клика на закрытие окна
      //console.log('Clicked', event.target.dataset.close)
      if (event.target.dataset.close) {// клик на элементы с дата-атрибутами
         modal.close()
      }
   }

   $modal.addEventListener('click', listener)// обработчик клика

   return Object.assign(modal, {
      destroy() {
         $modal.parentNode.removeChild($modal)// удаления узла из дом дерева
         $modal.removeEventListener('click', listener)// удаление обработчика 
         destroyed = true
      },
      setTitle(html) {
         $modal.querySelector('[data-name]').innerHTML = html
      },
      setImage(html) {
         $modal.querySelector('[data-image]').innerHTML = html
      },
      setContent(html) {
         $modal.querySelector('[data-content]').innerHTML = html//можно изменять контент в элементах с этим дата атрибутом
      },
      setSubtitle(html) {
         $modal.querySelector('[data-subtitle]').innerHTML = html//можно изменять контент в элементах с этим дата атрибутом
      },
      setAge(html) {
         $modal.querySelector('[data-age]').innerHTML = html//можно изменять контент в элементах с этим дата атрибутом
      },
      setInoculations(html) {
         $modal.querySelector('[data-inoculations]').innerHTML = html//можно изменять контент в элементах с этим дата атрибутом
      },
      setDiseases(html) {
         $modal.querySelector('[data-diseases]').innerHTML = html//можно изменять контент в элементах с этим дата атрибутом
      },
      setParasites(html) {
         $modal.querySelector('[data-parasites]').innerHTML = html//можно изменять контент в элементах с этим дата атрибутом
      }
   })
}
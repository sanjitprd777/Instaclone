// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "entries", "pagination" ]

  scroll() {

  	let next_page = this.paginationTarget.querySelector("a[rel='next']")

    if (next_page == null){
      return
    }

    let url = next_page.href

  	var body = document.body,
  		html = document.documentElement

  	var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

  	if (window.pageYOffset >= height - window.innerHeight - 100) {
  		console.log("hello: ",url)  // here we got correct next url
  		 this.loadMore(url)
  	}
  }

  loadMore(url){
  	Rails.ajax({
  		type: 'GET',
  		url: url,
  		dataType: 'json',
  		success: (data) => {
  			console.log(data)  // data not displaying
        this.entriesTarget.insertAdjacentHTML('beforeend', data.entries)
        this.paginationTarget.innnerHTML = data.pagination
  		}
  	})
  }


}

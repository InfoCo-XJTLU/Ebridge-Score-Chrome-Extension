document.addEventListener('DOMContentLoaded', ebridgescore, false);

function ebridgescore(){
    'use strict';

    let all = document.querySelectorAll("body > div.sv-page-content.sv-container-fluid > div");
    console.log(all.length);
    for(let n =7;n<7+all.length;n++){
        let table = document.querySelector('body > div.sv-page-content.sv-container-fluid > div:nth-child('+n+') > div.sv-panel-body > div > table > tbody');

        var Average = 0.00;
        for(let i=1;i<table.children.length;i++){
            if(table.children[i].children[2].textContent === ""|| table.children[i].children[3].textContent ==="") {continue;}
            Average += parseInt(table.children[i].children[2].textContent)*parseFloat(table.children[i].children[3].textContent)/100;
        }
        Average=Average.toFixed(2);
        //计算成绩
        let score = document.createElement("tr");
        var Name =["Average","Total","-"];
        for(const i of Name){
            let t = document.createElement("td");
            t.className='sv-col-md-2';
            t.innerText = i;
            score.appendChild(t);
        }
        let t = document.createElement("td");
        t.className='sv-col-md-2';
        t.innerText = Average;
        score.appendChild(t);
        //console.log(score);
        table.appendChild(score);


        if(n===7){
            //添加社团图标和文字
            // var logo = document.createElement('img');
            // logo.src = 'data:image/gif;base64,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';
            // let tt = document.createElement("tr");
            // let t = document.createElement("td");
            // t.className='sv-col-md-2';
            // t.innerText = '本插件由XJTLU InfoCo计算机社制作 ---- Made by InfoCo Computer Club';
            // tt.appendChild(t);
            // table.insertBefore(tt,table.firstChild);
            // table.insertBefore(logo, table.firstChild);
            let infoco_text = document.createElement("div")
            let head = document.querySelector("body > header")

            // var logo = document.createElement('img');
            // logo.src = 'data:image/png;base64,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eFz279+Pqqo8/vjjcxY08y10DMPA7XaTm5ubNOvMZcdc+pMugXiITX1xqtPx3zOxi/+WJCnxXjgcZmxsbM4iavqFyNwFzFTd8YIq2URM1RG3I5m+xDjzKYVvXkubIATSjJk3DOvIOllaGvR6mQiHWLGidFZkTDXanPy8JJmZcQvjW2VzsrN1V2hdl0hi+maLOBimOWcNMG8AkgEiSYL+QT8TExNUrChCNww0XcdhsxGJRlFkBVm2Bh4NBnE5VBRFnneoT3Uymei6DkIkttfX+twUFyxHSbJsTXPuL21uWQfEjb3QfR2EwOcfITc7k4qSAiYiOpf7vRxuPUdTQyWu9CxGQzE21VXy0dETfH1bI8dPn8NmUzjeeZ2alcUU5mSxuqwQgLFgmMGRYYqXZzMWjDDoH8HlUFAUO6HQONmZy9B061T4msdHJKpRt3olKU4HkWiUT8+0s2V9Hb3uQUKhCb635wCv//k3GR0LYbNBVno6fR4/N3xDNDywGqfDfvsAGKaJLAT/cbAVX2CUzWsrOHy6g3XVKznX1cvqilJyMtLocXspVVSuDQxTU5HPSCTGDZ+Pj4+dwOmwk5adx9lLPZzrvMbyzFQyM9KJxDQuXnNzwzfMnv8+wYb7y3AqBn3+ILmZKmOjQXoGvKytrsA9pvHQ/eWkOC0nwpEoF6+7KcjNYv+xU2y4v4KHa8tpv3yVD46cRpF0nm7awvHPztPvG8E3NsE3tj6YNPpuuQTia/Zf9x2ibnU59fetRNM0RoNhHHYF04RAYIyszAycqoPA2Dgup4quG8R0DU3TEUKQ6rTq8Ug0ihACxyR7jwWD/NfR05QUFbBxbSX9bi852ctw2O34hgNEozEUWSY1xYndplh7BCyeGAuG0HWdZelpRLUYiixN3jMKxkMRnA4bJpPfHAgJ1WFPygW3BCCOWP+gj4wUF6kprtvebU2NJjGjT+e1foZHQ6x/oHIKiUGyo7BbreOEDULc9vX5vEkwjnzCSEH8q8ibtTnTWXy+x1/JtrLTzZpNhmaiZW4w4h1vNfy8APiy6M5Hr2ly10+CbxuAX2e597X4Yhuw2HIPgMU2YLHlHgCLbcBiyz0AFtuAxZZ7ACy2AYst9wBYbAMWW37jAfg/h9CI9l6dLB4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMDdUMjI6MTU6NDIrMDg6MDAMl4PwAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTA3VDIyOjE1OjQyKzA4OjAwfco7TAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGXRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxMDgwGqT0LgAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA5MjGnQvjBAAAAGnRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvanBlZ4ulnrQAAAAXdEVYdFRodW1iOjpNVGltZQAxNjQ2NjYyNTQymiz8VgAAABN0RVh0VGh1bWI6OlNpemUANDcwODlCQpBBaJQAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjQ2NjU1NzIxNjQwNTU3Nl83OV9bMF3Y+sGcAAAAAElFTkSuQmCC'
            // logo.setAttribute('style', 'float:left;')

            infoco_text.innerText = "本插件由XJTLU InfoCo计算机社制作 ---- Made by InfoCo Computer Club"
            infoco_text.setAttribute('style', 'float:left;color: #ffffff; background-color: #185da9;position: relative;font-size: 20px;font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;')
            // head.appendChild(logo);

            head.appendChild(infoco_text);


        }
    }

    // Your code here...
}
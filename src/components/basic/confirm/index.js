export function confirm(config) {
    let body = document.getElementsByTagName("body")[0];
    let mask = document.createElement("div");
    mask.className = "mask";
    mask.addEventListener('click', () => {
        close();
        config.fail();
    });
    let confirm = document.createElement("div");
    confirm.className = "confirm-box";
    confirm.innerHTML = `
        <div class="title-box">
            <span>${config.title}</span>
        </div>
        <div class="content-box">
            <span>${config.content}</span>
        </div>
    `;
    let optionsBox = document.createElement("div");
    optionsBox.className = "options-box";
    let optionConfirm = document.createElement("div");
    optionConfirm.className = "option option-confirm";
    optionConfirm.innerHTML = `
        <span>${config.optionsText[0]}</span>
    `;
    optionConfirm.addEventListener('click', () => {
        close();
        config.success();
    });
    let optionCancel = document.createElement("div");
    optionCancel.className = "option option-cancel";
    optionCancel.innerHTML = `
        <span>${config.optionsText[1]}</span>
    `;
    optionCancel.addEventListener('click', () => {
        close();
        config.fail();
    });
    optionsBox.appendChild(optionCancel);
    optionsBox.appendChild(optionConfirm);
    confirm.appendChild(optionsBox);
    body.appendChild(mask);
    body.appendChild(confirm);

    /**
     * 关闭弹窗
     */
    function close() {
        mask.style.opacity = 0;
        confirm.style.opacity = 0;
        confirm.style.transform = "translate(-50%, -50%) translateY(-30px)";
        setTimeout(function() {
            mask.remove();
            confirm.remove();
        }, 400);
    }
}
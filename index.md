---
layout: home
title: home
css: home
---

<div class="main__frame">
    <div class="main__left_btn">
        <div class="main__arrow"></div>
        <!-- <img class="main__arrow" src="assets/imgs/arrow_left.png"> -->
    </div>
    <div class="main__img_screen">
        <div>
        </div>
    </div>
    <div class="main__content_outer">
        <div class ="main__content">
            <div>
                <img src="/oea/list/arktic_white.png">
            </div>
        </div>
    </div>
    <div class="main__right_btn">
        <div class="main__arrow"></div>
        <!-- <img class="main__arrow" src="assets/imgs/arrow_right.png"> -->
    </div>
</div>

<script>
    let items = {}
    let listData = [];
    {% for item in site.data.items %}
        listData.push("{{ item.name }}");
        items.{{ item.name }} = "/items/{{ item.update }}/{{ item.name }}";
    {% endfor %}
</script>
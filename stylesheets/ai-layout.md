#AI Flex Layout

## Warning

All property values must not have a space after the semi-colon;

**EXAMPLE**

```html
<!-- AVOID -->
<div attribute="property: value">

<!-- RECOMMENDED -->
<div attribute="property:value">
```


##Bourbon.io

> We are using the Bourbon sass mixins library. 

Further documentation can be found at [**bourbon.io**](http://boubon.io)


## Dev 

include the sass-task file in your gulp-tasks

```
npm install --save-dev gulp-sass node-neat gulp-plumber gulp-sourcemaps gulp-autoprefixer gulp-concat gulp-minify-css sassdash
```

Make sure the source paths match up properly

## ai-layout
 
> the ai-layout instructs the element to either be a column or a row


By default the ai-layout will be a `row`

### ai-layout `row`

>The **row** creates a flexbox with a row flex-direction


**@usage:** 
 - `row`
 - `row-xs`
 - `row-sm`
 - `row-md`
 - `row-lg`
 - `row-xl`

**NOTE:** if using the `row` property, it will override any media-query. Therefor the element will be a row across all screen sizes. 

```html

<section ai-layout="row"></section>
    
```

### ai-layout `column`

>The **column** creates a flexbox with a column flex-direction

**@usage:** 
 - `column`
 - `column-xs`
 - `column-sm`
 - `column-md`
 - `column-lg`
 - `column-xl`

**NOTE:** if using the `column` property, it will override any media-query. Therefor the element will be a column across all screen sizes. 

```html

<section ai-layout="column"></section>
<section ai-layout="row-xs column-md"></section>
    
```


## flex

> The **flex** attribute specifies the flex-basis of the element

The flex attribute will obviously only work inside of a flex container, whether an `ai-layout=""` or a custom flex-box container.

**NOTE:** The flex attribute can be used one of two ways.
 - 1: with media-queries 
 - 2: without media-queries 
 - 3: default usage 

**The Cannot be used together**

By default the `flex` will take up all available space.

**@default usage**

In this example, the div will have evenly distributed widths

```html

<section ai-layout="row">
    
    <div flex></div>
    <div flex></div>
    <div flex></div>

</section>
    
```

**@SCSS** 

```scss

[flex] {
    @include flex(1 0 auto);
}

```

**@usage without media-queries**
 - `flex="#{1-100}"`

The following three examples will all behave the same.

In this example, the first two divs will take up the first half of the screen, while the third div will take up the remaining half. 

```html

<section ai-layout="row">
    
    <div flex="25"></div>
    <div flex="25"></div>
    <div flex="50"></div>

</section>

<!-- or -->

<section ai-layout="row">
    
    <div flex></div>
    <div flex></div>
    <div flex="50"></div>

</section>

<!-- or -->

<section ai-layout="row">
    
    <div flex="25"></div>
    <div flex="25"></div>
    <div flex></div>

</section>

```

**@SCSS** 

**NOTE:** sizes **33** and **66** will be compensated for.

```scss

[flex="25"] {
    @include flex(0 0 25%);
}


[flex="33"] {
    @include flex(0 0 33.3333%);   
}

[flex="66"] {
    @include flex(0 0 66.6666%);   
}

```


**@usage with media-queries**
 - `flex="#{xs-lg}-#{1-100}"`


**On an extra small screen**
Each div will take up half of the screen. The last div will exceed the screen's width, so it will wrap under the first two divs

**On a Medium Screen**
In this example, the first two divs will take up the first half of the screen, while the third div will take up the remaining half. 

```html

<section ai-layout="row">
    
    <div flex="xs-50 md-25"></div>
    <div flex="xs-50 md-25"></div>
    <div flex="50"></div>

</section>


```

**@SCSS** 

**NOTE:** sizes **33** and **66** will be compensated for.

**@media-queries**
 - **xs-** | phone:   Extra small hand-held device
 - **sm-** | phone:   small hand-help device
 - **md-** | Tablet:  Medium hand-held device
 - **lg-** | Desktop: Large device
 - **xl-** | Deskotp: Extra large device 

```scss

@include from-screen(xs){
    [flex~="xs-#{$basis}"] {
        @include flex(0 0 $basis);    
    }
}

@include from-screen(sm){
    [flex~="sm-#{$basis}"] {
        @include flex(0 0 $basis);    
    }
}

@include from-screen(md){
    [flex~="md-#{$basis}"] {
        @include flex(0 0 $basis);    
    }
}

@include from-screen(lg){
    [flex~="lg-#{$basis}"] {
        @include flex(0 0 $basis);    
    }
}

@include from-screen(xl){
    [flex~="xl-#{$basis}"] {
        @include flex(0 0 $basis);    
    }
}

```


#flex-options & layout-options


## layout-options 

> The layout options goes on the ai-layout Element

## flex-options 

> The flex options goes on the flex Element


**NOTE:** Either or will work if you have the following

```html
<div flex="50" ai-layout="row" flex-options=""></div>
```

### *-options `align:#{$alignment}`

> The **align:** property specifies the align-items css property

**@usage** 
 - **align:start** Will align the columns to the start
 - **align:center** Will align the columns to the center
 - **align:end** Will align the columns to the end
 - **align:baseline** Will align the columns to the baseline

```html

<section ai-layout="row" layout-options="align:start;"></section>
<section ai-layout="row" layout-options="align:center;"></section>
<section ai-layout="row" layout-options="align:end;"></section>
<section ai-layout="row" layout-options="align:baseline;"></section>


<div flex="50" flex-options="align:start;"></div>
<div flex="50" flex-options="align:center;"></div>
<div flex="50" flex-options="align:end;"></div>
<div flex="50" flex-options="align:baseline;"></div>
    
```

**@SCSS** 

```scss

/*     align:start     */

[flex-options~="align:start"],
[layout-options~="align:start"] {
    @include align-items(flex-start);
}

/*     align:center     */

[flex-options~="align:center"],
[layout-options~="align:center"] {
    @include align-items(center);
}

/*     align:end     */
[flex-options~="align:end"],
[layout-options~="align:end"] {
    @include align-items(flex-end);
}

/*     align:baseline     */
[flex-options~="align:baseline"],
[layout-options~="align:baseline"] {
    @include align-items(baseline);
}

```


### *-options `justify:#{$justification}`

> The **align:** property specifies the horizontal alignment of the inner columns

**@usage** 
 - **justify:start** Will justify the content to the start
 - **justify:center** Will justify the content to the center
 - **justify:end** Will justify the content to the end
 - **justify:around** Will justify the content with space around
 - **justify:between** Will justify the content with space between

```html

<section ai-layout="row" layout-options="justify:start;"></section>
<section ai-layout="row" layout-options="justify:center;"></section>
<section ai-layout="row" layout-options="justify:end;"></section>
<section ai-layout="row" layout-options="justify:around;"></section>
<section ai-layout="row" layout-options="justify:between;"></section>


<div flex="50" flex-options="justify:start;"></div>
<div flex="50" flex-options="justify:center;"></div>
<div flex="50" flex-options="justify:end;"></div>
<div flex="50" flex-options="justify:around;"></div>
<div flex="50" flex-options="justify:between;"></div>
    
```

**@SCSS** 

```scss

/*     justify:start     */

[flex-options~="justify:start"],
[layout-options~="justify:start"] {
    @include align-items(flex-start);
}

/*     justify:center     */

[flex-options~="justify:center"],
[layout-options~="justify:center"] {
    @include align-items(center);
}

/*     justify:end     */
[flex-options~="justify:end"],
[layout-options~="justify:end"] {
    @include align-items(flex-end);
}

/*     justify:around     */
[flex-options~="justify:around"],
[layout-options~="justify:around"] {
    @include align-items(space-around);
}

/*     justify:between     */
[flex-options~="justify:between"],
[layout-options~="justify:between"] {
    @include align-items(space-between);
}

```


### *-options `content:#{$alignment}`

> The **content:** property specifies the align-content css property

**@usage** 
 - **content:start** Will align the content to the start
 - **content:center** Will align the content to the center
 - **content:end** Will align the content to the end
 - **content:baseline** Will align the content to the baseline

```html

<section ai-layout="row" layout-options="content:start;"></section>
<section ai-layout="row" layout-options="content:center;"></section>
<section ai-layout="row" layout-options="content:end;"></section>
<section ai-layout="row" layout-options="content:baseline;"></section>


<div flex="50" flex-options="content:start;"></div>
<div flex="50" flex-options="content:center;"></div>
<div flex="50" flex-options="content:end;"></div>
<div flex="50" flex-options="content:baseline;"></div>
    
```

**@SCSS** 

```scss

/*     content:start     */

[flex-options~="content:start"],
[layout-options~="content:start"] {
    @include align-content(flex-start);
}

/*     content:center     */

[flex-options~="content:center"],
[layout-options~="content:center"] {
    @include align-content(center);
}

/*     content:end     */
[flex-options~="content:end"],
[layout-options~="content:end"] {
    @include align-content(flex-end);
}

/*     content:baseline     */
[flex-options~="content:baseline"],
[layout-options~="content:baseline"] {
    @include align-content(baseline);
}

```


### *-options `self:#{$alignment}`

> The **self:** property will override the parent's **align:** property allowing the individual element to be aligned differently.

**@usage** 
 - **self:start** Will align the element to the start
 - **self:center** Will align the element to the center
 - **self:end** Will align the element to the end
 - **self:baseline** Will align the element to the baseline

```html

<section ai-layout="row" layout-options="self:start;"></section>
<section ai-layout="row" layout-options="self:center;"></section>
<section ai-layout="row" layout-options="self:end;"></section>
<section ai-layout="row" layout-options="self:baseline;"></section>


<div flex="50" flex-options="self:start;"></div>
<div flex="50" flex-options="self:center;"></div>
<div flex="50" flex-options="self:end;"></div>
<div flex="50" flex-options="self:baseline;"></div>
    
```

**@SCSS** 

```scss

/*     self:start     */

[flex-options~="self:start"],
[layout-options~="self:start"] {
    @include align-self(flex-start);
}

/*     self:center     */

[flex-options~="self:center"],
[layout-options~="self:center"] {
    @include align-self(center);
}

/*     self:end     */
[flex-options~="self:end"],
[layout-options~="self:end"] {
    @include align-self(flex-end);
}

/*     self:baseline     */
[flex-options~="self:baseline"],
[layout-options~="self:baseline"] {
    @include align-self(baseline);
}

```



### *-options `order:#{$order}`

> The **order:** property specifies the order of the row. 

**@usage** 
 - **order:first** Will place any given row as the first row
 - **order:last** Will place any given row as the last row

```html

<section ai-layout="row"></section>
<section ai-layout="row" layout-options=" order:last;"></section>
<section ai-layout="row" layout-options=" order:first;"></section>

<!-- Will visually appear as -->

<section ai-layout="row" layout-options=" order:first;"></section>
<section ai-layout="row"></section>
<section ai-layout="row" layout-options=" order:last;"></section>
```


```html

<div flex="50"></div>
<div flex="50" flex-options=" order:last;"></div>
<div flex="50" flex-options=" order:first;"></div>

<!-- Will visually appear as -->

<div flex="50" flex-options=" order:first;"></div>
<div flex="50"></div>
<div flex="50" flex-options=" order:last;"></div>
```

**@SCSS** 

```scss

/*     order:first     */

[flex-options~="order:first"],
[layout-options~="order:first"] {
    @include order(-1);
}

/*     order:last     */

[flex-options~="order:last"],
[layout-options~="order:last"] {
    @include order(1);
}

```


### visibility

The `invisible-${screen}`  allow the `ai-layout` or the `flex` elements to continue to take up it's space, however, it will hide it's inner content;

The `invisible-${screen}` will counteract on the `invisible-${screen}` attribute

**@Example**

```html 

<!-- 
This ai-layout will continue to take up its space, 
yet hide it's inner content 
-->
<section ai-layout="row" invisible-lg>

</section>


<section ai-layout="row">
    <!-- 
    This column will continue to take up its space, 
    yet hide it's inner content on any screen below medium.
    It will show it's content on any screen medium and above.
    -->
    <div flex="50" invisible-xs visible-md></div>
</section>

```


**@SCSS** 

```scss

// when $screen-size === xs

[visible-xs] {
    visibility: visible;
}

[invisible-xs] {
    visibility: collapse;
}

```


### hide and show

The `invisible-${screen}`  allow the ai-row or the ai-col to continue to take up it's space, however, it will hide it's inner content;

The `invisible-${screen}` will counteract on the `invisible-${screen}` attribute

**@Example**

```html 

<!-- 
This row will be hidden on large screens
-->
<section ai-layout="row" hide-lg>

</section>


<section ai-layout="row">
    <!-- 
    This colum will be hidden on any screen below medium
    -->
    <div flex="50" hide-xs show-md></div>
</section>

```


**@SCSS** 

```scss

// when $screen-size === xs

[hide-xs] {
    display: none;
}

[show-xs] {
    display: flex;
}

```



## [grid-block] 

There is a [grid-block] for testing purposes

**@Example**

```html

<section ai-layout="row">
    <div flex="33">
        <div grid-block></div>
    </div>
    <div flex="66">
        <div grid-block></div>
    </div>
</section>
```

Here is the css for the grid-block

```css

[grid-block] {
  background-color: material-color('pink', 'a200'); //#ff4081;  
  position: relative;
  min-height: 100%;
  min-width: 100%;
  height: 100px;
  margin: 5px 0;
  flex:1;
}

```



## [ai-flex-container]


If you are having issues getting the `ai-layout` to work in an element. 

place this attribute on it's immediate parent element to normalize flex-container standards.

`[ai-flex-container]`


**@SCSS**

```scss

$grid-gutter-width: 1.875rem !default; // 30px

[ai-flex-container] {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 ($grid-gutter-width / 2);
}

```

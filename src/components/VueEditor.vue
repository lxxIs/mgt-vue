<template>
    <div>
        <div class="container">
            <!--<div class="plugins-tips">-->
                <!--Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。-->
                <!--访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>-->
            <!--</div>-->
            <quill-editor ref="myTextEditor" v-model="content"  @change="onEditorChange($event)"  @blur="onEditorBlur($event)" :options="editorOption"></quill-editor>
            <!--<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>-->
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'editor',
        data: function(){
            return {
                content: '',
                editorOption: {
                    placeholder: ''
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
          onEditorChange(event) {
            // console.log(this.content);
          },
          onEditorBlur(quill) {
            this.$emit("editorData",this.content);
          },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
    @media (min-width: 1400px){
      .container {;
        float: left;
        max-width: 1300px;
        padding: 0;
      }
    }
</style>

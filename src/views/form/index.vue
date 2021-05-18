<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" list="datalist">
      <el-form-item label="哈哈哈">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="呵呵呵">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="呱呱呱" value="shanghai" />
          <el-option label="嘤嘤嘤" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="名字">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="点我鸭"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            type="fixed-time"
            placeholder="也点点我鸭"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="哒哒哒">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="鱼鱼鱼">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="选我鸭" name="type" />
          <el-checkbox label="看看我鸭" name="type" />
          <el-checkbox label="别点我" name="type" />
          <el-checkbox label="你瞅啥" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="诶诶诶">
        <el-radio-group v-model="form.resource">
          <el-radio label="错错" />
          <el-radio label="下次还敢" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="多写点哇">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const a = 21245125412412;
export default {
  components: {
  },
  data() {
    return {
      form: {
        name: a,
        region: '2',
        date1: '3',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('addcase/add', this.form)
        .then(() => {
          this.$router.push({ path: this.redirect || '/form/index' })
        })
      this.$message('提交成功')
    },

    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

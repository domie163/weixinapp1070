<template>
    <view class="content">
        <form class="app-update-pv">
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">家属</view>
                    <picker @change="jiashuChange" :value="jiashuIndex" :range="jiashuOptions" range-key="jiashuName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.jiashuId?ruleForm.jiashuName:"请选择家属"}}</view>
                    </picker>
                </view>-->
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">老人</view>
                    <picker @change="laorenChange" :value="laorenIndex" :range="laorenOptions" range-key="laorenName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.laorenId?ruleForm.laorenName:"请选择老人"}}</view>
                    </picker>
                </view>-->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">报名编号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.chuyaunUuidNumber" type="text" v-model="ruleForm.chuyaunUuidNumber" placeholder="报名编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">报名理由</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"16rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.chuyaunText" v-model="ruleForm.chuyaunText" placeholder="报名理由"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="chuyaunShenheTimeConfirm"
                              ref="chuyaunShenheTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					chuyaunUuidNumber: true,
					jiashuId: false,
					laorenId: false,
					chuyaunText: false,
					insertTime: false,
					chuyaunYesnoTypes: false,
					chuyaunYesnoText: false,
					chuyaunShenheTime: false,
					createTime: false,
        },
            ruleForm: {
					chuyaunUuidNumber: this.getUUID(),//数字
					jiashuId: '',
					laorenId: '',
					chuyaunText: '',
					insertTime: '',
					chuyaunYesnoTypes: '',//数字
					chuyaunYesnoValue: '',//数字对应的值
					chuyaunYesnoText: '',
					chuyaunShenheTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            chuyaunYesnoTypesOptions: [],
            chuyaunYesnoTypesIndex : 0,
            jiashuOptions: [],//家属
            jiashuIndex : 0,//家属下标
            laorenOptions: [],//老人
            laorenIndex : 0,//老人下标

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {
            let jiashuParams = {
                page: 1,
                limit: 100,
            }
            let jiashuData = await this.$api.page(`jiashu`, jiashuParams);
            this.jiashuOptions = jiashuData.data.list;
            let laorenParams = {
                page: 1,
                limit: 100,
            }
            let laorenData = await this.$api.page(`laoren`, laorenParams);
            this.laorenOptions = laorenData.data.list;
		/*下拉框*/
			let chuyaunYesnoTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'chuyaun_yesno_types',
            }
			let chuyaunYesnoTypes = await this.$api.page(`dictionary`, chuyaunYesnoTypesParams);
			this.chuyaunYesnoTypesOptions = chuyaunYesnoTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`chuyaun`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.chuyaunId){
                this.ruleForm.chuyaunId = options.chuyaunId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            jiashuChange(e) {
                this.jiashuIndex = e.target.value
                this.ruleForm.jiashuName = this.jiashuOptions[this.jiashuIndex].jiashuName
                this.ruleForm.jiashuId = this.jiashuOptions[this.jiashuIndex].id
            },
            laorenChange(e) {
                this.laorenIndex = e.target.value
                this.ruleForm.laorenName = this.laorenOptions[this.laorenIndex].laorenName
                this.ruleForm.laorenId = this.laorenOptions[this.laorenIndex].id
            },
            // 下拉变化
            chuyaunYesnoTypesChange(e) {
                this.chuyaunYesnoTypesIndex = e.target.value
                this.ruleForm.chuyaunYesnoValue = this.chuyaunYesnoTypesOptions[this.chuyaunYesnoTypesIndex].indexName
                this.ruleForm.chuyaunYesnoTypes = this.chuyaunYesnoTypesOptions[this.chuyaunYesnoTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			chuyaunShenheTimeConfirm(val) {
                this.ruleForm.chuyaunShenheTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },

            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.chuyaunUuidNumber)) {
                    this.$utils.msg(`报名编号不能为空`);
                    return
                }
				if ((!this.ruleForm.chuyaunText)) {
                    this.$utils.msg(`报名理由不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`chuyaun`, this.ruleForm);
                } else {
                    await this.$api.save(`chuyaun`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>
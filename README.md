# ReadingAPP
#### 1. 建立项目
   * nvm 安装 `8.9.4` ，再切换到 8.9.4
   * npm install -g react-native-cli
   * github 创建项目，clone 到本地，然后执行：react-native init xxx，注意：xxx 要与项目名一致  
   
#### 2. Android Studio
   * 下载地址：https://developer.android.com/studio/index.html
   * 在Ad中下载SDK，目前选择API Level为23的版本  
   
#### 3. mac下配置java环境
   * 查看版本，当前使用`1.8.0_161`
   
#### 4. 配置环境变量 
   * 在 {ProjectName}/android/gradle/wrapper/gradle-wrapper.properties中修改了gradle版本为`3.5-all`
   * 在 ~/.bash_profile中添加环境变量
      >export JAVA_HOME=查找到的java安装路径  
      export PATH=$JAVA_HOME/bin:$PATH  
      export CLASS_PATH=$JAVA_HOME/lib:$CLASS_PATH  
      export ANDROID_HOME=~/Library/Android/sdk  
      
   * 添加`adb`
      >PATH=".;$PATH:`~/Library/Android/sdk/platform-tools:`$JAVA_HOME/bin:$PATH:$NVM_DIR"
   
   * 引入该文件

#### 5. 连入设备

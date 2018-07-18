package com.boilerplate;

import android.app.Application;
import android.app.Activity;
import android.os.Bundle;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import cl.json.RNSharePackage;
import in.sriraman.sharedpreferences.RNSharedPreferencesReactPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.kevinejohn.RNMixpanel.RNMixpanel;

public class MainApplication extends NavigationApplication implements Application.ActivityLifecycleCallbacks {
  private Activity mCurrentActivity;

  @Override
  public void onCreate(){
    super.onCreate();
    registerActivityLifecycleCallbacks(this);
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  /*@Override
  public String getJSBundleFile() {
      return CodePush.getJSBundleFile();
  }*/

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new VectorIconsPackage(),
      new RNSharePackage(),
      new RNSharedPreferencesReactPackage(),
      new RNI18nPackage(),
      new RNMixpanel()
    );
  }

  @Override
  public void onActivityCreated(Activity activity, Bundle savedInstance){
    mCurrentActivity = activity;
  }

  @Override
  public void onActivityDestroyed(Activity activity){

  }

  @Override
  public void onActivitySaveInstanceState(Activity activity,Bundle bundle){

  }

  @Override
  public void onActivityPaused(Activity activity){

  }

  @Override
  public void onActivityResumed(Activity activity){

  }

  @Override
  public void onActivityStarted(Activity activity){

  }

  @Override
  public void onActivityStopped(Activity activity){

  }
}

<template>
  <div>
    <div class="text-base">
      <p class="text-lg mb-4">Termos e Condições</p>

      <div class="border border-gray-light w-full max-h-60 p-4 overflow-y-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum fringilla ex, vel viverra orci. Nullam congue mauris quis lorem gravida scelerisque. Nullam condimentum leo ut turpis eleifend ultricies placerat in sapien. Phasellus id ipsum aliquam massa varius ultrices. Vivamus bibendum, eros eu elementum consectetur, augue massa condimentum diam, in fringilla arcu mauris eget nisl. Vestibulum nec ligula faucibus, congue ante ac, blandit ante. Quisque vitae magna nisl. Phasellus quis vehicula risus, at placerat dui. Pellentesque semper metus at leo fermentum sodales. Donec ut nunc nec odio accumsan congue. Quisque malesuada id mauris a pellentesque. Donec id lacinia felis. Mauris justo ligula, volutpat vel tincidunt ac, luctus in neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec et pharetra leo, sit amet gravida quam. Nullam pretium consequat metus. Nunc lacinia quis turpis ac sollicitudin. Suspendisse posuere vehicula massa consequat convallis. Etiam tempor consequat odio nec faucibus. Etiam non ligula at diam tincidunt lobortis sed a lacus. Vivamus quis nibh auctor libero placerat pretium. Donec posuere finibus neque, a iaculis leo pulvinar ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam lobortis nulla sit amet ex venenatis fermentum. Quisque congue erat venenatis, posuere ligula eu, ultricies justo. Sed a mi mattis, dictum diam ut, venenatis ipsum. Morbi suscipit lectus at enim tincidunt hendrerit. Suspendisse lobortis, urna sed porta laoreet, enim augue rhoncus lacus, ac dapibus est velit ut risus. Nunc congue ullamcorper felis sit amet congue. Curabitur et accumsan diam. Mauris volutpat sodales accumsan. Vestibulum bibendum in erat quis blandit. Nullam sit amet metus diam. Nam placerat ex non nisi aliquam placerat. Praesent dictum, lorem eu faucibus semper, ante sem malesuada ante, feugiat bibendum diam mi vitae nisl. Mauris tempus metus quis est lacinia iaculis. Sed vitae ligula sed tellus finibus dictum in quis erat. Duis suscipit arcu urna, vel imperdiet magna gravida eu. Sed eget porta dolor. Quisque varius condimentum dapibus. In viverra nibh felis, efficitur tristique quam efficitur dignissim. Ut nec convallis lorem. Quisque varius nisl eu lacus lacinia maximus. Duis consectetur risus eu tristique pellentesque. Curabitur tincidunt sed risus et vehicula. Etiam tempor ex diam, ac facilisis quam imperdiet in. Nullam vulputate augue a nibh lobortis porta. Ut placerat, libero nec condimentum ornare, urna metus viverra odio, id gravida felis urna eu felis. Ut facilisis auctor justo ut mattis.
      </div>

      <p class="mt-3">Ao tocar no botão, você concorda com os Termos e Condições</p>
    </div>

    <div class="flex-shrink-0 justify-end flex pt-4">
      <app-button @click="$emit('ok')">ACEITAR</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'

export default {
  components: {
    AppButton
  }
}
</script>

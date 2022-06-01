(function() {var implementors = {};
implementors["aes"] = [{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes128.html\" title=\"struct aes::Aes128\">Aes128</a>","synthetic":false,"types":["aes::autodetect::Aes128"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes128Enc.html\" title=\"struct aes::Aes128Enc\">Aes128Enc</a>","synthetic":false,"types":["aes::autodetect::Aes128Enc"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes128Dec.html\" title=\"struct aes::Aes128Dec\">Aes128Dec</a>","synthetic":false,"types":["aes::autodetect::Aes128Dec"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes192.html\" title=\"struct aes::Aes192\">Aes192</a>","synthetic":false,"types":["aes::autodetect::Aes192"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes192Enc.html\" title=\"struct aes::Aes192Enc\">Aes192Enc</a>","synthetic":false,"types":["aes::autodetect::Aes192Enc"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes192Dec.html\" title=\"struct aes::Aes192Dec\">Aes192Dec</a>","synthetic":false,"types":["aes::autodetect::Aes192Dec"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes256.html\" title=\"struct aes::Aes256\">Aes256</a>","synthetic":false,"types":["aes::autodetect::Aes256"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes256Enc.html\" title=\"struct aes::Aes256Enc\">Aes256Enc</a>","synthetic":false,"types":["aes::autodetect::Aes256Enc"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"aes/struct.Aes256Dec.html\" title=\"struct aes::Aes256Dec\">Aes256Dec</a>","synthetic":false,"types":["aes::autodetect::Aes256Dec"]}];
implementors["cbc"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"cbc/struct.Decryptor.html\" title=\"struct cbc::Decryptor\">Decryptor</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"cipher/block/trait.BlockDecryptMut.html\" title=\"trait cipher::block::BlockDecryptMut\">BlockDecryptMut</a> + <a class=\"trait\" href=\"cipher/block/trait.BlockCipher.html\" title=\"trait cipher::block::BlockCipher\">BlockCipher</a> + <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a>,&nbsp;</span>","synthetic":false,"types":["cbc::decrypt::Decryptor"]},{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"cbc/struct.Encryptor.html\" title=\"struct cbc::Encryptor\">Encryptor</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"cipher/block/trait.BlockEncryptMut.html\" title=\"trait cipher::block::BlockEncryptMut\">BlockEncryptMut</a> + <a class=\"trait\" href=\"cipher/block/trait.BlockCipher.html\" title=\"trait cipher::block::BlockCipher\">BlockCipher</a> + <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a>,&nbsp;</span>","synthetic":false,"types":["cbc::encrypt::Encryptor"]}];
implementors["ctr"] = [{"text":"impl&lt;C, F&gt; <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"ctr/struct.CtrCore.html\" title=\"struct ctr::CtrCore\">CtrCore</a>&lt;C, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"cipher/block/trait.BlockEncryptMut.html\" title=\"trait cipher::block::BlockEncryptMut\">BlockEncryptMut</a> + <a class=\"trait\" href=\"cipher/block/trait.BlockCipher.html\" title=\"trait cipher::block::BlockCipher\">BlockCipher</a> + <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"ctr/flavors/trait.CtrFlavor.html\" title=\"trait ctr::flavors::CtrFlavor\">CtrFlavor</a>&lt;C::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ctr::ctr_core::CtrCore"]}];
implementors["hmac"] = [{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"hmac/struct.HmacCore.html\" title=\"struct hmac::HmacCore\">HmacCore</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"digest/core_api/wrapper/trait.CoreProxy.html\" title=\"trait digest::core_api::wrapper::CoreProxy\">CoreProxy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a>: <a class=\"trait\" href=\"digest/digest/trait.HashMarker.html\" title=\"trait digest::digest::HashMarker\">HashMarker</a> + <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> + <a class=\"trait\" href=\"digest/core_api/trait.UpdateCore.html\" title=\"trait digest::core_api::UpdateCore\">UpdateCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.FixedOutputCore.html\" title=\"trait digest::core_api::FixedOutputCore\">FixedOutputCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a>&lt;BufferKind = <a class=\"struct\" href=\"block_buffer/struct.Eager.html\" title=\"struct block_buffer::Eager\">Eager</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a> as <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U256.html\" title=\"type typenum::generated::consts::U256\">U256</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;&lt;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a> as <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"typenum/generated/consts/type.U256.html\" title=\"type typenum::generated::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["hmac::optim::HmacCore"]}];
implementors["sha2"] = [{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha2/struct.Sha256VarCore.html\" title=\"struct sha2::Sha256VarCore\">Sha256VarCore</a>","synthetic":false,"types":["sha2::core_api::Sha256VarCore"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha2/struct.Sha512VarCore.html\" title=\"struct sha2::Sha512VarCore\">Sha512VarCore</a>","synthetic":false,"types":["sha2::core_api::Sha512VarCore"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()